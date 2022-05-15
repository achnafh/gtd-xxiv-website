import React from "react";

// Components
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Misc
import routes from "./routes";
import LBManager from "./component/leaderboard_manager";

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
      <Footer />
    </Router>
  );
}

export default App;
