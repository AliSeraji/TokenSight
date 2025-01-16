import { PairData } from "store/api/types";
import styled from "styled-components";
import Image from "next/image";
import { truncateAddress } from "utils/functions";
import { useSetSelectedPair } from "store/api/hooks";
import { useCallback } from "react";
import { useCloseSearchModal } from "store/search/hooks";
import SafeImage from "components/ImageWithFallback";

const Warp = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  height: 82px;
  padding: 12px;
  background: ${({ theme }) => theme.BlackBoxBG50};
  border-radius: 8px;
  border: 2px solid transparent;
  transition: all 0.3s ease;
  &:hover {
    cursor: pointer;
    border: 2px solid ${({ theme }) => theme.GrayBlueDark};
  }
`;

const MainImage = styled(Image)`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  margin-right: 12px;
`;

const VersionPairName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  margin-right: 24px;
  & > :first-child {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    font-size: 16px;
    font-weight: 400px;
    color: ${({ theme }) => theme.text0};
  }
  & > :last-child {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    font-size: 16px;
    font-weight: 400px;
    color: ${({ theme }) => theme.text1};
  }
`;

const AddressesWarper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8px;
  height: 100%;
  gap: 16px;
  & > :first-child {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    font-size: 14px;
    font-weight: 400px;
    color: ${({ theme }) => theme.GrayText};
  }
  & > :last-child {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    font-size: 14px;
    font-weight: 400px;
    color: ${({ theme }) => theme.GrayText};
  }
`;

export default function Row({ pair }: { pair: PairData }): React.ReactNode {
  const setSelectedPair = useSetSelectedPair();
  const closeModal = useCloseSearchModal();
  const handleClick = useCallback(() => {
    setSelectedPair(pair);
    closeModal();
  }, []);

  return (
    <Warp onClick={handleClick}>
      <SafeImage
        src={pair.info?.imageUrl}
        alt={"icon"}
        width={60}
        height={60}
      />
      <VersionPairName>
        <div>
          {pair.baseToken.symbol}/{pair.quoteToken.symbol}
        </div>
        <div>
          {pair.chainId} - {pair.labels}
        </div>
      </VersionPairName>
      <AddressesWarper>
        <div>{`Pair Address: ${truncateAddress(pair.pairAddress)}`}</div>
        <div>{`Token Address: ${truncateAddress(pair.baseToken.address)}`}</div>
      </AddressesWarper>
    </Warp>
  );
}
