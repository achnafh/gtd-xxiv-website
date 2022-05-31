import React from "react";
import axios from 'axios'

// Components
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import LBManager from "./component/leaderboard_manager";
import Scripts from "./scripts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Misc
import routes from "./routes";

function App() {
  
  return (
    <Router>
      <Navbar />
      <Routes>
        {routes.map((route) => {
          return (
            <Route
              exact
              key={route.id}
              path={route.path}
              element={route.component}
            />
          );
        })}
        <Route exact key={5982347} path="/lbmanager" element={<LBManager />} />
      </Routes>
      <Scripts />
      <Footer />
    </Router>
  );
}

export default App;
