import React, { useState } from "react";
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
                <LinkTab label="HOME" href="/home" />
                <LinkTab label="ABOUT US" href="/about" />
                <LinkTab label="OUR COMMITTEE" href="/committee" />
                <LinkTab label="EVENTS" href="/event" />
                <LinkTab label="FAQ" href="/faq" />
                <LinkTab label="LEADERBOARD" href="/event" />
              </Tabs>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
