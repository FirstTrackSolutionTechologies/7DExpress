// src/components/Form.js

import React from 'react';

const Pricing = () => {
  return (
    <div className="bg-slate-200">
    <div className="md:mx-32  ">
    <div className="container p-4">
    <div className="text-sky-950 text-[20px] md:text-[25px] font-bold items-center justify-center text-center mb-4">Calculate Your Shipping Price</div>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        
        {/* First Row */}
        <div className="mb-4 flex flex-wrap -mx-3">
          <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dropdown1">
              Shipping Method
            </label>
            <select
              className="block w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              id="dropdown1"
            >
              <option value="">Select shipping method</option>
              <option value="S">Surface</option>
              <option value="E">Express 2</option>
            </select>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dropdown2">
              Status
            </label>
            <select
              className="block  w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              id="dropdown2"
            >
              <option value="">Select status</option>
              <option value="F">Forward</option>
              <option value="RTO">RTO</option>
              <option value="REV">Reverse</option>
            </select>
          </div>
        </div>

        {/* Second Row */}
        
        <div className="mb-4 flex flex-wrap -mx-3">
          <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
              Source Pincode
            </label>
            <input
              className="shadow  border rounded w-full py-2 px-3 border-gray-400 hover:border-gray-500  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="sourcePin"
              type="text"
              placeholder="Ex:411037"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
              Destination Pincode
            </label>
            <input
              className="shadow  border rounded w-full py-2 px-3 border-gray-400 hover:border-gray-500  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="destPin"
              type="text"
              placeholder="Ex:411001"
            />
          </div>
        </div>

        {/* Third Row */}
        
        <div className="mb-4 flex flex-wrap -mx-3">
          <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
              Weight (In grams)
            </label>
            <input
              className="shadow  border rounded w-full py-2 px-3 border-gray-400 hover:border-gray-500  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="weight"
              type="text"
              placeholder="1000"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dropdown2">
              Payment Mode
            </label>
            <select
              className="block  w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              id="payment"
            >
              <option value="">Select a payment option</option>
              <option value="COD">COD</option>
              <option value="PRE">Prepaid</option>
            </select>
          </div>
        </div>

        {/* Fourth Row */}
        <div className="mb-4 flex flex-wrap -mx-3">
          <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
          <label className="block text-gray-700 text-sm font-bold mb-3" htmlFor="firstName">
              COD Amount
            </label>
            <input
              className="shadow  border rounded w-full py-2 px-3 border-gray-400 hover:border-gray-500  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="codAmount"
              type="text"
              placeholder="0"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
          
            <div className="flex-1 md:mx-2 mb-2 min-w-[300px] flex">
            <div className="flex-1 md:mx-2 mb-2 min-w-[90px] space-y-2">
              <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="length">L (in cm)</label>
              <input
                className="shadow  border rounded w-full py-2 px-3 border-gray-400 hover:border-gray-500  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                id="length"
                name="length"
                placeholder="Ex. 2.5"
              />
            </div>
            <div className="flex-1 mx-2 mb-2 min-w-[90px] space-y-2">
              <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="breadth">B (in cm)</label>
              <input
                className="shadow  border rounded w-full py-2 px-3 border-gray-400 hover:border-gray-500  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                id="breadth"
                name="breadth"
                placeholder="Ex. 2.5"
              />
            </div>
            <div className="flex-1 md:mx-2 mb-2 min-w-[90px] space-y-2">
              <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="height">H (in cm)</label>
              <input
                className="shadow  border rounded w-full py-2 px-3 border-gray-400 hover:border-gray-500  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                id="height"
                name="height"
                placeholder="Ex. 2.5"
              />
            </div>
            </div>
            
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-center">
          <button
            className="bg-sky-950 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    </div>
    </div>
  );
}

export default Pricing;