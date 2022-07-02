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
import "./navbar.css";
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
  const isMatch = useMediaQuery(theme.breakpoints.down("xs"));
  console.log(isMatch);

  return (
    <React.Fragment>
      <AppBar
        style={{
          background: "rgba(247, 0, 0, 0.079)",
          boxShadow:
            "inset 54.1667px -54.1667px 54.1667px rgba(187, 0, 0, 0.079), inset -54.1667px 54.1667px 54.1667px rgba(255, 255, 255, 0.079)",
        }}
      >
        <Toolbar>
          <img src={gtdlogo} />
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                Shoppee
              </Typography>
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                TabIndicatorProps={{
                  style: {
                    background: "green",
                  },
                }}
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
