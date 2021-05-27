import React, { useState, useContext } from "react";
import { Wrapper } from "./elements";

import { JetContext } from "./../../context/JetContext";

function AddJet() {
  const [, setJets] = useContext(JetContext);

  const [jetName, setJetName] = useState("");
  const [country, setCountry] = useState("");
  const [id, setId] = useState(0);

  const add = (e) => {
    e.preventDefault();
    setJets((prevJets) => {
      return [...prevJets, { name: jetName, country: country, id: id }];
    });
    setJetName("");
    setCountry("");
    const prevId = id;
    setId(prevId + 1);
  };

  return (
    <Wrapper>
      <form onSubmit={add}>
        <label>Aircraft Name</label>
        <input
          type="text"
          name="name"
          value={jetName}
          onChange={(e) => setJetName(e.target.value)}
        />

        <label>Country</label>
        <input
          type="text"
          name="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <button>Add</button>
      </form>
    </Wrapper>
  );
}

export default AddJet;
