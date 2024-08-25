import { Stack, Typography } from "@mui/material";
import { Button } from "../../components/Button";
import { ISequence } from ".";

interface PanelTopbarProps {
  sequence: ISequence;
  addSequence: VoidFunction;
  removeSequence: VoidFunction;
  resetSequence: VoidFunction;
}

const PanelActionbar = ({
  sequence,
  addSequence,
  removeSequence,
  resetSequence,
}: PanelTopbarProps) => (
  <Stack
    gap={2}
    direction={{ md: "row", xs: "column" }}
    justifyContent="space-between"
    sx={{ py: 4 }}
  >
    <Typography variant="h6">
      Current Index:{" "}
      <Typography
        component="span"
        variant="h5"
        data-testid={`current-index-${sequence.length}`}
      >
        {sequence.length}
      </Typography>
    </Typography>

    <Stack gap={1} direction="row">
      <Button type="primary" onClick={addSequence}>
        Add
      </Button>
      <Button type="primary" onClick={removeSequence}>
        Remove
      </Button>
      <Button type="secondary" onClick={resetSequence}>
        Restart
      </Button>
    </Stack>
  </Stack>
);

export default PanelActionbar;
