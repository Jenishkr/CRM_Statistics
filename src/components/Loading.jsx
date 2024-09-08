import React from 'react';

const Loading = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 mt-40 ">
      <div className="text-2xl font-bold mb-6"> </div>
      <div className="mb-6">
       <div className="px-4 py-2 border rounded-md w-20" ></div>
      </div>

      
      <div className="grid grid-cols-1  md:grid-cols-3 grid-row-4 gap-6 mb-6">
        <div className="bg-white p-4 rounded-lg shadow grid grid-rows-4 md:grid-rows-3">
          <div className="text-gray-500"></div>
          <div className="text-4xl font-bold"></div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-gray-500"></div>
          <div className="text-4xl font-bold"></div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-gray-500"></div>
          <div className="text-4xl font-bold"></div>
        </div>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="text-lg font-bold mb-4"></div>
          <div className="h-48 bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500"></span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="text-lg font-bold mb-4"></div>
          <div className="h-48 bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;