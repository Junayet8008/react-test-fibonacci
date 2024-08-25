import React from "react";
import { AppBar, Container, Toolbar } from "@mui/material";
import { Typography } from "@mui/material";
import { ReactComponent as FibonacciLogo } from "../../assets/Fibonacci-logo.svg";

const NavBar = () => {
  return (
    <AppBar
      position="static"
      sx={{ height: "80px", p: 0 }}
      data-testid="fibonacci-header"
    >
      <Container maxWidth="xl" sx={{ my: "auto" }}>
        <Toolbar disableGutters sx={{ display: "flex", gap: 1 }}>
          <FibonacciLogo />
          <Typography noWrap variant="h4" color="#ffffff">
            Fibonacci Sequence
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
