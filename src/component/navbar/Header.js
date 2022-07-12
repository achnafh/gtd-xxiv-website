import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import DrawerComp from "./DrawerComp";
import gtdlogo from "./images/Logo GTD Normal.png";
import "./navbar.css";

const LinkTab = (props) => {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      style={{ position: "sticky" }}
      {...props}
    />
  );
};

const Header = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar
      sx={{
        background: "rgba(0, 0, 0, 0.079)",
        boxShadow:
          "inset 100.1667px -100.1667px 100.1667px rgba(0, 0, 0, 0.079), inset -100.1667px 100.1667px 100.1667px rgba(255, 255, 255, 0.079)",
        backdropFilter: "blur(60.8333px)",
        maxHeight: "10vh",
      }}
    >
      <Toolbar>
        {isMatch ? (
          <>
            <Tab
              icon={<img src={gtdlogo} className="navbar-logo" />}
              component={Link}
              to={"/"}
              onClick={() => setValue(0)}
            />
            <DrawerComp value={value} setValue={setValue} />
          </>
        ) : (
          <>
            <Tab
              label={<img src={gtdlogo} className="navbar-logo" />}
              component={Link}
              to={"/"}
              onClick={() => setValue(0)}
            />
            <Tabs
              sx={{ marginLeft: "auto" }}
              TabIndicatorProps={{ style: { background: "white" } }}
              value={value}
              onChange={(e, value) => setValue(value)}
            >
              <Tab
                label={<span className="navbar-label">HOME</span>}
                component={Link}
                to={"/"}
              />
              <Tab
                label={<span className="navbar-label">ABOUT US</span>}
                component={Link}
                to={"/about"}
              />
              <Tab
                label={<span className="navbar-label">OUR COMMITTEE</span>}
                component={Link}
                to={"/committee"}
              />
              <Tab
                label={<span className="navbar-label">EVENTS</span>}
                component={Link}
                to={"/event"}
              />
              <Tab
                label={<span className="navbar-label">FAQ</span>}
                component={Link}
                to={"/faq"}
              />
              <Tab
                label={<span className="navbar-label">LEADERBOARD</span>}
                component={Link}
                to={"/leaderboard"}
              />
            </Tabs>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
