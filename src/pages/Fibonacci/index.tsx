import React, { useCallback, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

import Actionbar from "./ActionBar";
import SequenceList from "./SequenceList";
import ErrorModal from "./ErrorModal";

type IShape = "triangle" | "square" | "circle";

export interface Item {
  fibonacci: number;
  shape: IShape;
}

export type ISequence = Array<Item>;

const Fibonacci: React.FC = () => {
  const [sequence, setSequence] = useState<ISequence>([]);
  const [showModal, setShowModal] = useState(false);

  const addSequence = useCallback(() => {
    if (sequence.length < 9) {
      setSequence(getNextFibonacci(sequence));
    } else {
      setShowModal(true);
    }
  }, [sequence]);

  const removeSequence = useCallback(() => {
    if (sequence.length > 0) {
      setSequence(sequence.slice(0, -1));
    }
  }, [sequence]);

  const resetSequence = useCallback(() => {
    setSequence([]);
  }, []);

  const handleClose = useCallback(() => {
    setShowModal(false);
    resetSequence();
  }, []);

  const getNextFibonacci = (sequence: ISequence): ISequence => {
    const last = sequence[sequence.length - 1] || 0;
    const secondLast = sequence[sequence.length - 2] || 0;

    return [
      ...sequence,
      {
        fibonacci: last.fibonacci + secondLast.fibonacci || 1,
        shape: ["triangle", "square", "circle"][
          Math.floor(Math.random() * 3)
        ] as IShape,
      },
    ];
  };

  return (
    <>
      <Stack
        sx={{
          width: 1,
          height: 1,
        }}
      >
        <Actionbar
          sequence={sequence}
          addSequence={addSequence}
          removeSequence={removeSequence}
          resetSequence={resetSequence}
        />

        <SequenceList sequence={sequence} />
      </Stack>

      <ErrorModal open={showModal} onClose={handleClose} />
    </>
  );
};

export default Fibonacci;
