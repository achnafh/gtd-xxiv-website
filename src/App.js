import React from "react";
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
