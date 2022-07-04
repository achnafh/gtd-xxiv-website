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
      <AppBar sx={{ background: "#063970" }}>
        <Toolbar>
          {isMatch ? (
            <>
              <img src={gtdlogo} />
              <DrawerComp />
            </>
          ) : (
            <>
              <img src={gtdlogo} />
              <Tabs
                sx={{ marginLeft: "auto" }}
                TabIndicatorProps={{ style: { background: "white" } }}
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab label="HOME" component={Link} to={"/"} />
                <Tab label="ABOUT US" component={Link} to={"/about"} />
                <LinkTab
                  label="OUR COMMITTEE"
                  component={Link}
                  to={"/committee"}
                />
                <LinkTab label="EVENTS" component={Link} to={"/event"} />
                <LinkTab label="FAQ" component={Link} to={"/faq"} />
                <LinkTab
                  label="LEADERBOARD"
                  component={Link}
                  to={"/leaderboard"}
                />
              </Tabs>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
