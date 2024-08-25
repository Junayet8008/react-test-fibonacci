import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import { Box, ThemeProvider } from "@mui/material";
import theme from "./theme";
import Fibonacci from "./pages/Fibonacci";
import Layout from "./components/Layout";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Box>
          <Layout>
            <Routes>
              <Route path="/" element={<Fibonacci />} />
            </Routes>
          </Layout>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
