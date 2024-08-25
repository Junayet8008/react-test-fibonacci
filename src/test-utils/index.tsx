import { render, RenderOptions } from "@testing-library/react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import React from "react";
import { act } from "react";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const customRender = (
  ui: React.ReactElement,
  options: Omit<RenderOptions, "wrapper">
) => {
  return {
    ...render(ui, { wrapper: Wrapper, ...options }),
  };
};

export * from "@testing-library/react";
export * from "@testing-library/user-event";
export { customRender as render };
