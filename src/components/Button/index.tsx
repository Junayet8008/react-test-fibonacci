import { Button as MuiButton } from "@mui/material";
import React from "react";

interface Props {
  children: React.ReactNode;
  onClick: () => void;
  type: "primary" | "secondary";
}

const buttonTypeMap: Record<string, "contained" | "outlined"> = {
  primary: "contained",
  secondary: "outlined",
};

export const Button: React.FC<Props> = ({ children, onClick, type }) => {
  return (
    <MuiButton
      variant={buttonTypeMap[type]}
      onClick={onClick}
      sx={{
        textTransform: "none",
        width: "122.21px",
        height: "41.53px",
        borderRadius: 3,
      }}
    >
      {children}
    </MuiButton>
  );
};
