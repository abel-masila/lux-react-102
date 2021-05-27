import React, { useContext } from "react";
import { Wrapper } from "./elements";

import { JetContext } from "./../../context/JetContext";

function Nav() {
  const [jets] = useContext(JetContext);
  return (
    <Wrapper>
      <h2>JET AIRCRAFTS LIST</h2>
      <p>Total aircraft in the list: {jets.length}</p>
    </Wrapper>
  );
}

export default Nav;
