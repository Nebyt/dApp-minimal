import React from 'react';
import useYoroi from '../hooks/yoroiProvider';

const AccessButton = () => {
  const { api, connect } = useYoroi();

  return (
    <div className="mx-auto bg-gray-200">
      <div className="grid justify-items-center py-5">
        {api ?
          <div className="text-xl font-bold tracking-tight text-black">
            Connected To Yoroi
          </div> :
          <button
            className="rounded-md border-black-300 bg-sky-600 hover:bg-sky-800 py-5 px-5 text-white font-bold"
            onClick={() => connect(false, false)}
          >
            Request Access To Yoroi
          </button>
        }
      </div>
    </div>
  );
}

export default AccessButton;
