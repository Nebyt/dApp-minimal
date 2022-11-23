import React from "react";
import ApiCard from "./apiCard";

const IsEnabledCard = ({onResponse, onWaiting}) => {

  const isDisabledClick = () => {
    onWaiting(true);
    window.cardano.yoroi?.isEnabled()
      .then((enabled) => {
        onWaiting(false);
        onResponse(enabled)
      })
      .catch((e) => {
        onWaiting(false);
        onResponse(e.info)
        console.log(e)
      })
  }

  const apiProps = {
    apiName: "isEnabled",
    apiDescription: "Returns true or false depending on whether Yoroi is enabled",
    clickFunction: isDisabledClick
  }

  return (
    <ApiCard {...apiProps} />
  );
}

export default IsEnabledCard;