const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const mysql = require('mysql2/promise');
require('dotenv').config();

// Database connection
const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

// Secret key for JWT
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' })
    };
  }

  const { email, password } = JSON.parse(event.body);
  

  const connection = await mysql.createConnection(dbConfig);

  try {
    const [rows] = await connection.execute('SELECT * FROM USERS WHERE email = ? AND isActive=1', [email]);
    if (rows.length > 0 && await bcrypt.compare(password, rows[0].password)) {
      const id = rows[0].uid;
      const name = rows[0].fullName;
      const verified = rows[0].isVerified;
      const emailVerified = rows[0].emailVerified;
      const admin = rows[0].isAdmin;
      const business_name = rows[0].businessName;
      const accessToken = jwt.sign({authenticated: true,  email , verified , name, id, business_name , admin, emailVerified}, ACCESS_TOKEN_SECRET, { expiresIn: '1d' });
      // const refreshToken = jwt.sign({  email , verified , name, id, business_name , admin, emailVerified }, REFRESH_TOKEN_SECRET, { expiresIn: '7d' });
      return {
        statusCode: 200,
        headers: {
          // 'Set-Cookie': [`accessToken=${accessToken}; HttpOnly; Secure; Path=/; Max-Age=900` , `refreshToken=${refreshToken}; HttpOnly; Secure; Path=/; Max-Age=604800`],
          'Set-Cookie': `accessToken=${accessToken}; HttpOnly; Secure; Path=/; Max-Age=${60*60*24}` ,
        },
        body: JSON.stringify({ message: 'Login Successfull', success : true , token : accessToken})
      };
    } else {
      return {
        statusCode: 401,
        body: JSON.stringify({ message: 'Invalid credentials', success : false }),
      };
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error logging in', error: error.message, success : false }),
    };
  } finally {
    await connection.end();
  }
};
