import useYoroi from "../hooks/yoroiProvider";
import useWasm from "../hooks/useWasm";
import GetBalanceCard from "./getBalanceCard";
import IsEnabledCard from "./isEnabledCard";
import GetUtxosCard from "./getUtxosCard";
import React, {useState} from "react";

const MainTab = () => {
    const { api } = useYoroi();
    const wasm = useWasm();
    const [currentText, setCurrentText] = useState('');
    const [currentWaiterState, setWaiterState] = useState(false);
    const setResponse = (response) => {
      setCurrentText(JSON.stringify(response, undefined, 2));
    };
    const copyToClipboard = () => {
      navigator.clipboard.writeText(currentText).then(function() {
        console.log('Async: Copying to clipboard was successful!');
      }, function(err) {
        console.error('Async: Could not copy text: ', err);
      });
    };

    return (
        <div className="container mx-auto text-gray-300 py-5">
            <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                    <IsEnabledCard onResponse={setResponse} onWaiting={setWaiterState}/>
                </div>
                <div>
                    <GetBalanceCard api={api} wasm={wasm} onResponse={setResponse} onWaiting={setWaiterState}/>
                </div>
                <div>
                    <GetUtxosCard api={api} wasm={wasm} onResponse={setResponse} onWaiting={setWaiterState}/>
                </div>
            </div>
            <div className="block p-5 mt-5 min-w-full rounded-lg border shadow-md bg-gray-800 border-gray-700">
              <div className="flex justify-between">
                <div>
                  <label className="text-white font-medium">
                    Response:
                  </label>
                </div>
                <div>
                  <label className="text-white font-medium">
                    {currentWaiterState ? "Waiting for the response..." : ""}
                  </label>
                </div>
                <div>
                  <button className="
                    text-white
                    font-medium
                    rounded-lg
                    text-sm
                    px-5
                    py-2.5
                    my-1
                    text-center
                    bg-green-800
                    hover:bg-green-700
                    focus:ring-green-600
                    disabled:opacity-50
                    "
                    onClick={copyToClipboard}
                  >
                    Copy
                  </button>
                </div>
              </div>
              <div className="h-96">
                <textarea className="w-full h-full rounded bg-gray-900 text-white px-2" disabled readOnly value={currentText}></textarea>
              </div>
            </div>
        </div>
    );
}

export default MainTab;