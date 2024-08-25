import { Stack } from "@mui/material";
import FibonacciItem from "./SequenceItem";
import { ISequence } from ".";

interface MainPanelProps {
  sequence: ISequence;
}

const SequenceList = ({ sequence }: MainPanelProps) => {
  return (
    <Stack
      sx={{
        flexGrow: 1,
        overflow: "hidden",
        pb: 4,
      }}
    >
      <Stack
        gap={5}
        sx={{
          bgcolor: "#FCFCFC",
          border: "1px solid #E4E4E4",
          borderRadius: 2,
          p: 3,
          pt: 8,
          height: 1,
          overflowY: "auto",
        }}
      >
        {sequence.map((value, idx) => (
          <FibonacciItem key={idx} value={value} />
        ))}
      </Stack>
    </Stack>
  );
};

export default SequenceList;
