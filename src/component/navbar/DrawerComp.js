import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tabs,
  Tab,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const pages = [
  "HOME",
  "ABOUT US",
  "OUR COMMITTEE",
  "EVENTS",
  "FAQ",
  "LEADERBOARD",
];

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [value, setValue] = useState();

  //function to close the drawer when the tab is chosen
  const onClickTab = () => {
    setOpenDrawer(false);
  };
  return (
    <React.Fragment>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        {/* <List>
          {pages.map((page, index) => (
            <ListItemButton key={index}>
              <ListItemIcon>
                <ListItemText>{page}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List> */}
        <Tabs
          orientation="vertical"
          sx={{ marginLeft: "auto" }}
          TabIndicatorProps={{ style: { background: "white" } }}
          textColor="inherit"
          value={value}
          onChange={(e, value) => setValue(value)}
        >
          <Tab onClick={onClickTab} label="HOME" component={Link} to={"/"} />
          <Tab
            onClick={onClickTab}
            label="ABOUT US"
            component={Link}
            to={"/about"}
          />
          <Tab
            onClick={onClickTab}
            label="OUR COMMITTEE"
            component={Link}
            to={"/committee"}
          />
          <Tab
            onClick={onClickTab}
            label="EVENTS"
            component={Link}
            to={"/event"}
          />
          <Tab onClick={onClickTab} label="FAQ" component={Link} to={"/faq"} />
          <Tab
            onClick={onClickTab}
            label="LEADERBOARD"
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
