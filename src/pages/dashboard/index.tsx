import { useAppKitAccount } from "@reown/appkit/react";
import Chart from "components/dashboard/Chart";
import { SearchButton } from "components/dashboard/SearchBox";
import SearchModal from "components/dashboard/SearchModal";
import TokenDashboard from "components/dashboard/TokenDash/TokenDashboard";
import { useRouter } from "next/router";
import { useEffect } from "react";
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

const SearchDataWrap = styled.div<{ $isSelected?: boolean }>`
  min-width: 400px;
  height: ${({ $isSelected }) => ($isSelected ? "100%" : "100vh")};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
  min-width: 100%;
  height: unset;
  padding: 12px;
  padding-bottom: 4px;
`;

export default function Dashboard(): React.ReactNode {
  const router = useRouter();
  const { address, isConnected } = useAppKitAccount();
  const openModal = useOpenSearchModal();
  const selectedPair = useSelectedPair();

  useEffect(() => {
    if (!address && !isConnected) {
      router.replace("/login");
    }
  }, [address, isConnected]);
  return (
    <Wrap>
      <SearchDataWrap $isSelected={selectedPair === null ? false : true}>
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
