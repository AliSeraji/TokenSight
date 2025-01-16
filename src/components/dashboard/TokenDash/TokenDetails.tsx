import { Liquidity, PairData } from "store/api/types";
import { AddressWrapper, IconWrapper, StatCard } from "./common";
import styled, { useTheme } from "styled-components";
import { truncateAddress } from "utils/functions";
import { useState } from "react";
import { CheckCircle, Copy } from "lucide-react";

const StatsGrid = styled.div`
  display: flex;
  flex-direction: column;
`;

const PriceContainer = styled.div`
  text-align: right;
`;

const Price = styled.div`
  font-size: 28px;
  font-weight: bold;
`;

const PriceChange = styled.div<{ $isPositive?: boolean }>`
  display: flex;
  align-items: center;
  gap: 4px;
  color: ${($isPositive) => ($isPositive ? "#16a34a" : "#dc2626")};
`;

export default function TokenDetails({
  pairData,
}: {
  pairData: PairData;
}): React.ReactNode {
  const theme = useTheme();

  // Track copied state for each address type
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null);

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedAddress(text);
      setTimeout(() => setCopiedAddress(null), 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  // Helper function to check if specific address is copied
  const isAddressCopied = (address: string) => copiedAddress === address;

  return (
    <StatsGrid>
      <StatCard>
        <div>Chain</div>
        <div>{pairData.chainId}</div>
      </StatCard>
      <StatCard>
        <div>DEX</div>
        <div>{pairData.dexId}</div>
      </StatCard>
      <StatCard>
        <div>Pair Address</div>
        <div>
          <AddressWrapper onClick={() => handleCopy(pairData.pairAddress)}>
            <IconWrapper $show={isAddressCopied(pairData.pairAddress)}>
              {isAddressCopied(pairData.pairAddress) ? (
                <CheckCircle size={16} color={theme.Green} />
              ) : (
                <Copy size={16} color={theme.GrayText} />
              )}
            </IconWrapper>
            <div>{truncateAddress(pairData.pairAddress)}</div>
          </AddressWrapper>
        </div>
      </StatCard>
      <StatCard>
        <div>{`${pairData.baseToken.name} Address`}</div>
        <div>
          <AddressWrapper
            onClick={() => handleCopy(pairData.baseToken.address)}
          >
            <IconWrapper $show={isAddressCopied(pairData.baseToken.address)}>
              {isAddressCopied(pairData.baseToken.address) ? (
                <CheckCircle size={16} color={theme.Green} />
              ) : (
                <Copy size={16} color={theme.GrayText} />
              )}
            </IconWrapper>
            <div>{truncateAddress(pairData.baseToken.address)}</div>
          </AddressWrapper>
        </div>
      </StatCard>
      <StatCard>
        <div>{`${pairData.quoteToken.name} Address`}</div>
        <div>
          <AddressWrapper
            onClick={() => handleCopy(pairData.quoteToken.address)}
          >
            <IconWrapper $show={isAddressCopied(pairData.quoteToken.address)}>
              {isAddressCopied(pairData.quoteToken.address) ? (
                <CheckCircle size={16} color={theme.Green} />
              ) : (
                <Copy size={16} color={theme.GrayText} />
              )}
            </IconWrapper>
            <div>{truncateAddress(pairData.quoteToken.address)}</div>
          </AddressWrapper>
        </div>
      </StatCard>
      <StatCard>
        <div>Created At</div>
        <div>
          {new Date(pairData.pairCreatedAt * 1000).toLocaleDateString()}
        </div>
      </StatCard>
    </StatsGrid>
  );
}

export function StatsSection({
  marketCap,
  fdv,
  liquidity,
  priceUsd,
}: {
  marketCap: number;
  fdv: number;
  liquidity: Liquidity;
  priceUsd: string;
}): React.ReactNode {
  return (
    <StatsGrid>
      <StatCard>
        <div>{"Price USD"}</div>
        <Price>${Number(priceUsd).toLocaleString()}</Price>
      </StatCard>
      <StatCard>
        <div>Market Cap</div>
        <div>${marketCap?.toLocaleString()}</div>
      </StatCard>
      <StatCard>
        <div>FDV</div>
        <div>${fdv?.toLocaleString()}</div>
      </StatCard>
      <StatCard>
        <div>Liquidity</div>
        <div>${liquidity?.usd?.toLocaleString()}</div>
      </StatCard>
    </StatsGrid>
  );
}
