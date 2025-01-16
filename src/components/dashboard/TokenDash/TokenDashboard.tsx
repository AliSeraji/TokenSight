import React from "react";
import styled from "styled-components";

import { PairData } from "store/api/types";
import { StatsSection } from "./TokenDetails";
import TokenHeader from "./Header";
import AdvancedStats from "./TokenInfo";

// Styled Components
const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export default function TokenDashboard({
  pairData,
}: {
  pairData: PairData | null;
}): React.ReactNode {
  if (!pairData) return <div>Loading...</div>;

  return (
    <DashboardContainer>
      <TokenHeader
        quoteToken={pairData.quoteToken}
        imgUrl={pairData?.info?.imageUrl ?? null}
        baseToken={pairData.baseToken}
      />

      <StatsSection
        marketCap={pairData.marketCap}
        fdv={pairData.fdv}
        liquidity={pairData.liquidity}
        priceUsd={pairData.priceUsd}
      />

      <AdvancedStats pairData={pairData} />
    </DashboardContainer>
  );
}
