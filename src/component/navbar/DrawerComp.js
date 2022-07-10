import React, { useState } from "react";
import { Drawer, IconButton, Tabs, Tab } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import "./navbar.css";

const DrawerComp = (props) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const { value, setValue } = props;

  //function to close the drawer when the tab is chosen
  const onClickTab = () => {
    setOpenDrawer(false);
  };
  return (
    <React.Fragment>
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Tabs
          orientation="vertical"
          TabIndicatorProps={{ style: { background: "white" } }}
          textColor="inherit"
          value={value}
          onChange={(e, value) => setValue(value)}
          className="navbar-tabs-background"
        >
          <Tab
            onClick={onClickTab}
            label={<span className="navbar-label">HOME</span>}
            component={Link}
            to={"/"}
          />
          <Tab
            onClick={onClickTab}
            label={<span className="navbar-label">ABOUT US</span>}
            component={Link}
            to={"/about"}
          />
          <Tab
            onClick={onClickTab}
            label={<span className="navbar-label">OUR COMMITTEE</span>}
            component={Link}
            to={"/committee"}
          />
          <Tab
            onClick={onClickTab}
            label={<span className="navbar-label">EVENTS</span>}
            component={Link}
            to={"/event"}
          />
          <Tab
            onClick={onClickTab}
            label={<span className="navbar-label">FAQ</span>}
            component={Link}
            to={"/faq"}
          />
          <Tab
            onClick={onClickTab}
            label={<span className="navbar-label">LEADERBOARD</span>}
            component={Link}
            to={"/leaderboard"}
          />
        </Tabs>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="white" />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
