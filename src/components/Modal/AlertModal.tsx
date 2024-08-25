import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "./Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { Button } from "../Button";
import { Stack } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: { md: 430, xs: 240 },
  width: 1,
  bgcolor: "background.paper",
  p: 4,
  borderRadius: "20px",
};

interface Props {
  open: boolean;
  title: string;
  description: string;
  onClick: VoidFunction;
  onCloseRequest: VoidFunction;
}

const AlertModal: React.FC<Props> = ({
  open,
  title,
  description,
  onClick,
  onCloseRequest,
}) => {
  return (
    <Modal open={open} onCloseRequest={onCloseRequest}>
      <Fade in={open}>
        <Box sx={style}>
          <Typography
            id="transition-modal-title"
            fontSize="24.63px"
            lineHeight="30.03px"
            fontWeight="600"
          >
            {title}
          </Typography>
          <Typography
            id="transition-modal-description"
            variant="body2"
            sx={{ mb: 3 }}
          >
            {description}
          </Typography>
          <Stack
            justifyContent="flex-end"
            direction={"row"}
            sx={{ width: "100%" }}
          >
            <Button type="primary" onClick={onClick}>
              Ok
            </Button>
          </Stack>
        </Box>
      </Fade>
    </Modal>
  );
};

export default AlertModal;
