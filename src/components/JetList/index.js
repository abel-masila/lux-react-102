import React, { useContext } from "react";
import Jet from "./../Jet";
import { JetContext } from "./../../context/JetContext";

function JetList() {
  const [jets] = useContext(JetContext);
  return (
    <div>
      {jets.map((jet) => (
        <Jet name={jet.jetName} country={jet.country} key={jet.id} />
      ))}
    </div>
  );
}

export default JetList;
