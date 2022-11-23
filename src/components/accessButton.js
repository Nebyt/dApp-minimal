import React from 'react';
import useYoroi from '../hooks/yoroiProvider';
import { textPartFromWalletChecksumImagePart } from '@emurgo/cip4-js';

const AccessButton = () => {
  const { api, connect } = useYoroi();
  const getWalletPlate = (apiObject) => {
    const auth = apiObject.experimental.auth && apiObject.experimental.auth();
    const walletId = auth.getWalletId();
    return textPartFromWalletChecksumImagePart(walletId);
  };

  return (
    <div className="mx-auto bg-gray-200">
      <div className="grid justify-items-center py-5">
        {api ?
          <div className="text-xl font-bold tracking-tight text-black">
            Connected To Yoroi
            <div className="py-1 text-xl font-bold tracking-tight text-black text-center">
              {getWalletPlate(api)}
            </div>
          </div> :
          <button className="rounded-md border-black-300 bg-sky-600 hover:bg-sky-800 py-5 px-5 text-white font-bold" onClick={() => connect(true, false)}>
            Request Access To Yoroi
          </button>
        }
      </div>
    </div>
  );
}

export default AccessButton;
