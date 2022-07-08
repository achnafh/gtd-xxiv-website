import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  IconButton,
  Icon,
  Avatar,
} from "@mui/material";
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import DrawerComp from "./DrawerComp";
import gtdlogo from "./images/gtdlogo.svg";

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
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  return (
    <React.Fragment>
      <AppBar
        sx={{
          background: "rgba(247, 0, 0, 0.079)",
          boxShadow:
            "inset 54.1667px -54.1667px 54.1667px rgba(187, 0, 0, 0.079), inset -54.1667px 54.1667px 54.1667px rgba(255, 255, 255, 0.079)",
          backdropFilter: "blur(62.8333px)",
        }}
      >
        <Toolbar>
          {isMatch ? (
            <>
              <Tab icon={<img src={gtdlogo} />} component={Link} to={"/"} />
              <DrawerComp />
            </>
          ) : (
            <>
              <Tab icon={<img src={gtdlogo} />} component={Link} to={"/"} />
              <Tabs
                sx={{ marginLeft: "auto" }}
                TabIndicatorProps={{ style: { background: "white" } }}
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab label="HOME" component={Link} to={"/"} />
                <Tab label="ABOUT US" component={Link} to={"/about"} />
                <Tab label="OUR COMMITTEE" component={Link} to={"/committee"} />
                <Tab label="EVENTS" component={Link} to={"/event"} />
                <Tab label="FAQ" component={Link} to={"/faq"} />
                <Tab label="LEADERBOARD" component={Link} to={"/leaderboard"} />
              </Tabs>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
