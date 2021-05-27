import React from "react";
import Nav from "./../../components/Nav";
import AddJet from "./../../components/AddJet";
import JetList from "./../../components/JetList";

import useLocalStorage from "./../../hooks/useLocalStorage";
const Home = () => {
  const [theme, setTheme] = useLocalStorage("theme");

  console.log(theme);
  return (
    <div className="App">
      <Nav />
      <AddJet />
      <JetList />

      <button onClick={() => setTheme("dark")}>Change Theme</button>
    </div>
  );
};

export default Home;
