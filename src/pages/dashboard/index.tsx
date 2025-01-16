import Chart from "components/dashboard/Chart";
import { SearchButton } from "components/dashboard/SearchBox";
import SearchModal from "components/dashboard/SearchModal";
import TokenDashboard from "components/dashboard/TokenDash/TokenDashboard";
import { useSelectedPair } from "store/api/hooks";
import { useOpenSearchModal } from "store/search/hooks";
import styled from "styled-components";

const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 12px;
  background: ${({ theme }) => theme.Black30};
`;

const SearchDataWrap = styled.div`
  min-width: 400px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-right: 1px solid ${({ theme }) => theme.White10};
`;

const Container = styled.div`
  flex: 1;
  min-width: 0;
  height: 100%;
  display: flex;
`;

const SearchBtnWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: unset;
  padding: 12px;
  padding-bottom: 4px;
`;

export default function Dashboard(): React.ReactNode {
  const openModal = useOpenSearchModal();
  const selectedPair = useSelectedPair();
  return (
    <Wrap>
      <SearchDataWrap>
        <SearchBtnWrap>
          <SearchButton toggle={() => openModal()} />
        </SearchBtnWrap>
        <TokenDashboard pairData={selectedPair} />
      </SearchDataWrap>
      <Container>
        <Chart
          baseTokenSymbol={selectedPair?.baseToken.symbol}
          quoteTokenSymbol={selectedPair?.quoteToken.symbol}
        />
      </Container>
      <SearchModal />
    </Wrap>
  );
}
