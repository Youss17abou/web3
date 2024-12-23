import React, { useState } from "react";

const Context = React.createContext(null);

const ProviderWrapper = (props) => {
  const [nbOk, setNbOk] = useState(0);
  const [nbBad, setNbBad] = useState(0);
  const [nbGood, setNbGood] = useState(0);

  const incrementOk = () => {
    console.log("🦧🦧🦧 increment_OK");
    setNbOk(nbOk + 1);
  };

  const incrementBad = () => {
    console.log("🦧🦧🦧 increment_BAD");
    setNbBad(nbBad + 1);
  };

  const incrementGood = () => {
    console.log("🦧🦧🦧 increment_GOOD");
    setNbGood(nbGood + 1);
  };

  const resetAll = () => {

    console.log("🦧🦧🦧 resetAll");
    setNbOk(0);
    setNbBad(0);
    setNbGood(0);
  };

  const exposedValue = {
    nbOk,
    nbBad,
    nbGood,
    incrementOk,
    incrementBad,
    incrementGood,
    resetAll,
  };



  return (
    <Context.Provider value={exposedValue}>{props.children}</Context.Provider>
  );
};

export {Context, ProviderWrapper };
