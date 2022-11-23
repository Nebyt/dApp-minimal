import React from "react";
import ApiCard from "./apiCard";
import {bytesToHex, hexToBytes, wasmMultiassetToJSONs} from "../utils/utils";

const GetUtxosCard = ({ api, wasm, onResponse, onWaiting }) => {
  const getUtxosClick = () => {
    onWaiting(true);
    api?.getUtxos()
      .then((hexUtxos) => {
        let utxos = [];
        for (let i = 0; i < hexUtxos.length; i++) {
          const utxo = {};
          const wasmUtxo = wasm.TransactionUnspentOutput.from_bytes(hexToBytes(hexUtxos[i]));
          const output = wasmUtxo.output();
          const input = wasmUtxo.input();
          utxo.tx_hash = bytesToHex(input.transaction_id().to_bytes());
          utxo.tx_index = input.index();
          utxo.receiver = output.address().to_bech32();
          utxo.amount = output.amount().coin().to_str();
          utxo.asset = wasmMultiassetToJSONs(output.amount().multiasset());
          utxos.push(utxo);
        }
        onWaiting(false);
        onResponse(utxos);
      })
      .catch((e) => {
        onWaiting(false);
        onResponse(e.info);
        console.log(e);
      })
  };

  const apiProps = {
    apiName: "getUtxos",
    apiDescription: "Returns the available UTXOs within your wallet.",
    clickFunction: getUtxosClick,
  };

  return (
    <ApiCard {...apiProps}/>
  );
}

export default GetUtxosCard;