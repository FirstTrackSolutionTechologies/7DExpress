import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {authState, message ,login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password)
  };

  useEffect(() => {
    if(authState.authenticated){
      navigate('/dashboard')
    }
  }, [authState])

  const navigateToSignup = () => {
    navigate('/signup');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-bg-login bg-cover">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-5 text-center text-sky-950">Hello! Sign in to continue</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-950 focus:border-sky-950 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-950 focus:border-sky-950 sm:text-sm"
            />
          </div>
          <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2 text-gray-700 text-[12px] md:text-[15px]">Keep me signed in</span>
                </label>
                <a href="#" className="text-sky-900 hover:underline text-[12px] md:text-[15px]">
                  Forgot password?
                </a>
              </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-950 hover:bg-sky-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </div>

            {message}
          <div className="mt-4 text-center">
              <button
                className="w-full flex justify-center text-gray-700 font-bold py-2 rounded-md border-gray-500 border-2"
              >
                Sign in with <img src='/src/assets/images/googlebg.png' className='w-6 h-6 ml-2 mt-0'/>
              </button>
            </div>
            <div className="mt-4 text-center">
              <p className="text-gray-700">
                Don't have an account?{' '}
                <button
                  className="text-sky-900 hover:underline"
                  onClick={navigateToSignup}
                >
                  Sign up
                </button>
              </p>
            </div>
            
        </form>
      </div>
    </div>
  );
};

export default Login;
