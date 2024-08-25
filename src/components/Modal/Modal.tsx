import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";

interface ModalProps {
  open: boolean;
  onCloseRequest: VoidFunction;
  children: React.ReactElement;
}

const CustomModal: React.FC<ModalProps> = ({
  open,
  onCloseRequest,
  children,
}) => {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      {children}
    </Modal>
  );
};

export default CustomModal;
