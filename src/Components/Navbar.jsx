import {
  AppBar,
  Box,
  Button,
  IconButton,
  Tab,
  Tabs,
  Toolbar,
} from "@mui/material";
import Logo from "/Images/brand_logo.png";
import React from "react";

const Navbar = () => {
  return (
    <AppBar position="static" color="inherit">
      <Toolbar>
        <IconButton sx={{ padding: 2 }}>
          <img src={Logo} />
        </IconButton>
        <Box marginLeft="auto" fontWeight="bold"> 
          <Tabs textColor="black" sx={{display:{xs:"none",sm:"block"}}}>
            <Tab label="Home" />
            <Tab label="About" />
            <Tab label="Contact" />
            <Tab label="Store" />
          </Tabs>
        </Box>

        <Button variant="contained" color="error" sx={{ marginLeft: "auto" }}>
          Log In
        </Button>
      </Toolbar>
    </AppBar>
    
  );
};

export default Navbar;
