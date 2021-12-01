import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./Widgets";

const App=()=>{
  return (
    <React.Fragment>
      <Router>
      <Navbar/>
        <Routes>
          <Route exact path="/">
              
          </Route>
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
