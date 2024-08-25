import * as React from "react";
import { AlertModal } from "../../components/Modal";

interface Props {
  open: boolean;
  onClose: () => void;
}

const ErrorModal: React.FC<Props> = ({ open, onClose }) => {
  return (
    <AlertModal
      open={open}
      onCloseRequest={onClose}
      title="Current index is 10"
      description="The game will restart"
      onClick={onClose}
    />
  );
};

export default ErrorModal;
