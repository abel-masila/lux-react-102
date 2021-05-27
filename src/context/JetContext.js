import React, { createContext } from "react";

const JetContext = createContext();

const JetProvider = (props) => {
  const [jets, setJets] = React.useState([]);

  return (
    <JetContext.Provider value={[jets, setJets]}>
      {props.children}
    </JetContext.Provider>
  );
};

export { JetProvider, JetContext };
