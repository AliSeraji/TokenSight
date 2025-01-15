import RetrievedData from "components/dashboard/Content";
import SearchBox, { SearchButton } from "components/dashboard/SearchBox";
import SearchModal from "components/dashboard/SearchModal";
import { useState } from "react";
import styled from "styled-components";

const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  background: ${({ theme }) => theme.Black30};
`;

const SearchWrap = styled.div`
  width: 100%;
  height: 58px;
  padding: 8px 12px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background: ${({ theme }) => theme.White10};
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 12px;
`;

export default function Dashboard(): React.ReactNode {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const toggleModal = () => setOpenModal(!openModal);

  return (
    <Wrap>
      <SearchWrap>
        <SearchButton toggle={toggleModal} />
      </SearchWrap>
      <Container></Container>
      <SearchModal open={openModal} toggle={toggleModal} />
    </Wrap>
  );
}
