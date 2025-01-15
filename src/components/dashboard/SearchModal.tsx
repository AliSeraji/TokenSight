import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import styled from "styled-components";

const Wrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400;
  background: ${({ theme }) => theme.Black};
  border: 2px solid ${({ theme }) => theme.Black50};
  box-shadow: 24;
  z-index: 100;
`;

export default function SearchModal({
  open,
  toggle,
}: {
  open: boolean;
  toggle: () => void;
}) {
  return (
    <Modal
      open={open}
      onClose={toggle}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Wrap>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Text in a modal
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
      </Wrap>
    </Modal>
  );
}
