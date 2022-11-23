import React from 'react';

const ApiCard = (props) => {
  const { apiName, apiDescription, clickFunction } = props

  return (
    <div className="flex flex-col max-w-sm h-full rounded-lg shadow-md bg-gray-200 border-gray-100">
      <button className="w-full h-20 bg-sky-600 hover:bg-sky-800 rounded-lg text-white" onClick={clickFunction}>{apiName}</button>
      <div className="p-5">
        <p className="mb-3 font-normal text-gray-700">{apiDescription}</p>
      </div>
    </div>
  );
}

export default ApiCard;