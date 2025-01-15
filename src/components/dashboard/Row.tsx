import { PairData } from "store/api/types";
import styled from "styled-components";
import Image from "next/image";

const Warp = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 350px;
  height: 82px;
  padding: 12px;
  background: ${({ theme }) => theme.Black5};

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.Black70};
    border: 1px solid ${({ theme }) => theme.Black80};
  }
`;

const MainImage = styled(Image)`
  width: 60px;
  height: 60px;
  border-radius: 8px;
`;

const VersionPairName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
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
  return (
    <Warp>
      <MainImage src={pair.info.imageUrl} alt={"icon"} />
      <VersionPairName>
        <div>
          {pair.quoteToken.symbol}/{pair.baseToken.symbol}
        </div>
        <div>
          {pair.chainId} - {pair.labels}
        </div>
      </VersionPairName>
      <AddressesWarper>
        <div>{pair.pairAddress}</div>
        <div>{pair.baseToken.address}</div>
      </AddressesWarper>
    </Warp>
  );
}
