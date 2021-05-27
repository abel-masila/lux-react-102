import { Switch, Route } from "react-router-dom";

import Home from "./container/Home";
import About from "./container/About";

function App() {
  return (
    <Switch>
      <Route component={Home} path="/" exact />
      <Route component={About} path="/about" exact />
    </Switch>
  );
}

export default App;
