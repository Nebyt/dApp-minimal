import React from 'react';

const ApiCard = (props) => {
  const { apiName, apiDescription, clickFunction } = props

  return (
    <div className="flex flex-col max-w-sm h-full rounded-lg shadow-md bg-gray-800 border-gray-700">
      <button className="w-full h-20 bg-orange-700 hover:bg-orange-800 rounded-t-lg text-white" onClick={clickFunction}>{apiName}</button>
      <div className="p-5">
        <p className="mb-3 font-normal text-gray-400">{apiDescription}</p>
      </div>
    </div>
  );
}

export default ApiCard;