import React from "react";
import { Box, Container } from "@mui/material";
import NavBar from "../Header";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Box sx={{ height: "100vh" }}>
      {/* Header */}
      <NavBar />

      {/* Content */}
      <Box sx={{ height: "calc(100vh - 80px)" }}>
        <Container maxWidth="xl" sx={{ height: 1 }}>
          {children}
        </Container>
      </Box>
    </Box>
  );
};

export default Layout;
