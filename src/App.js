import React from "react";

// Components
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import LBManager from "./component/leaderboard_manager";
import Scripts from "./scripts";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Misc
import routes from "./routes";

function PrivateRoute({ children }) {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" />;
}

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
        <Route
          exact
          key={5982347}
          path="/lbmanager"
          element={
            <PrivateRoute>
              <LBManager />
            </PrivateRoute>
          }
        />
      </Routes>
      <Scripts />
      <Footer />
    </Router>
  );
}

export default App;
