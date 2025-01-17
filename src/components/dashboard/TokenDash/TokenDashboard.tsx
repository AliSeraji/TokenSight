import React from "react";
import styled from "styled-components";

import { PairData } from "store/api/types";
import { StatsSection } from "./TokenDetails";
import TokenHeader from "./Header";
import AdvancedStats from "./TokenInfo";

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
`;

const NoData = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export default function TokenDashboard({
  pairData,
}: {
  pairData: PairData | null;
}): React.ReactNode {
  return (
    <DashboardContainer>
      {pairData ? (
        <>
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
        </>
      ) : (
        <NoData>
          <div>No Data</div>
          <div>Click on the Search Button to Search for Data</div>
        </NoData>
      )}
    </DashboardContainer>
  );
}
