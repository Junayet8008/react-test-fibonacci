import * as React from "react";
// @Component
import { Box, Stack, Typography } from "@mui/material";
import { Shape } from "../../components/Shape";
// @type
import { Item } from ".";

interface FibonacciItemProps {
  value: Item;
}

const FibonacciItem = ({ value }: FibonacciItemProps) => {
  const renderPolygons = (value: Item) =>
    Array.from({ length: value.fibonacci }).map((_, index) => (
      <Shape type={value.shape} key={index} />
    ));

  return (
    <Stack
      alignItems="center"
      direction={"row"}
      sx={{ mb: 1 }}
      data-testid={`fibo-item-${value.fibonacci}`}
    >
      <Box
        sx={{
          width: "50px",
          display: "flex",
          mb: "auto",
        }}
      >
        <Typography variant="h4" fontWeight={600} sx={{ mr: "10px" }}>
          {value.fibonacci}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 3,
          flexGrow: 1,
          flexWrap: "wrap",
        }}
      >
        {renderPolygons(value)}
      </Box>
    </Stack>
  );
};

export default FibonacciItem;
