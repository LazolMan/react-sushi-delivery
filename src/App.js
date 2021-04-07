import React from "react";
import { Route } from "react-router-dom";

import { Header } from "./components";
import { Home, Basket } from "./pages";

function App() {
  return (
    <>
      <Header />

      <div className="content">
        <Route path="/" component={Home} exact />
        <Route path="/bag" component={Basket} exact />
      </div>
    </>
  );
}

export default App;
