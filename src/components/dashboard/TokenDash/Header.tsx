import { useSelectedPair } from "store/api/hooks";
import { TokenInfo } from "store/api/types";
import styled from "styled-components";
import { TokenVersion } from "./common";
import SafeImage from "components/ImageWithFallback";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.black};
  border-bottom: 1px solid ${({ theme }) => theme.White20};
  gap: 12px;
  padding: 8px;
  ${({ theme }) => theme.mediaQueries.md`
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  `};
`;

const TokenIdentity = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 8px;
`;

const TokenImage = styled(SafeImage)`
  width: 48px;
  height: 48px;
  border-radius: 100%;
`;

const TokenName = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-size: 16px;
  color: ${({ theme }) => theme.White90};
  font-weight: 600;
`;

export default function TokenHeader({
  baseToken,
  quoteToken,
}: {
  baseToken: TokenInfo;
  quoteToken: TokenInfo;
  imgUrl: string | null | undefined;
}): React.ReactNode {
  const pair = useSelectedPair();
  return (
    <HeaderContainer>
      <TokenIdentity>
        <SafeImage
          src={pair?.info?.imageUrl ?? null}
          alt={baseToken?.name}
          width={48}
          height={48}
        />
        <TokenName>
          <div>{`${baseToken?.symbol}/${quoteToken.symbol}`}</div>
        </TokenName>
        <TokenName>
          <div
            style={{ marginRight: "8px" }}
          >{`${pair?.chainId} -> ${baseToken.symbol}`}</div>{" "}
          {pair?.labels && <TokenVersion>{pair?.labels}</TokenVersion>}
        </TokenName>
      </TokenIdentity>
    </HeaderContainer>
  );
}
