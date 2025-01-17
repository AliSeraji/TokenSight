import Modal from "@mui/material/Modal";
import styled from "styled-components";
import SearchBox from "./SearchBox";
import SearchResult from "./SearchResult";
import { useCloseSearchModal, useSearchModal } from "store/search/hooks";
import { useCallback } from "react";

const Wrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  height: 700px;
  background: ${({ theme }) => theme.Black};
  border: 2px solid ${({ theme }) => theme.Black50};
  box-shadow: 24;
  display: flex;
  flex-direction: column;
  z-index: 100;
  ${({ theme }) => theme.mediaQueries.md`
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translate(0%, 0%);
  `};
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 12px;
  background: none;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  overflow: hidden;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  flex: 1;
  overflow: hidden;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-size: 28px;
  font-weight: 500;
  color: ${({ theme }) => theme.White};
  &:hover {
    cursor: default;
  }
`;

const ExitBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  width: 40px;
  height: 40px;
  background: none;
  color: ${({ theme }) => theme.white};
  font-size: 28px;
  font-weight: 600;
  &:hover {
    background: ${({ theme }) => theme.GrayBlueDark90};
    cursor: pointer;
  }
`;

const SearchBarWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 34px;
  margin-bottom: 12px;
`;

const ListWrap = styled.div`
  flex: 1;
  overflow: hidden;
`;

export default function SearchModal() {
  const isOpen = useSearchModal();
  const closeModal = useCloseSearchModal();

  return (
    <Modal
      open={isOpen}
      onClose={() => closeModal()}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Wrap>
        <Header>
          <Title>Search</Title>
          <ExitBtn onClick={() => closeModal()}>X</ExitBtn>
        </Header>
        <Container>
          <Body>
            <SearchBarWrap>
              <SearchBox />
            </SearchBarWrap>
            <ListWrap>
              <SearchResult />
            </ListWrap>
          </Body>
        </Container>
      </Wrap>
    </Modal>
  );
}
