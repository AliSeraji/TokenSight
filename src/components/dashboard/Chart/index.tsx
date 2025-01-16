import { useMemo } from "react";
import { TradingViewStockChartWidget } from "react-tradingview-components";
import { styled } from "styled-components";

const ChartContainer = styled.div`
  flex: 1;
  min-width: 0;
  position: relative;
  height: 100%;
`;

export default function Chart({
  baseTokenSymbol,
  quoteTokenSymbol,
}: {
  baseTokenSymbol: string | undefined;
  quoteTokenSymbol: string | undefined;
}): React.ReactNode {
  console.log(baseTokenSymbol + ":" + quoteTokenSymbol);

  const symbol = useMemo(() => {
    if (!baseTokenSymbol || !quoteTokenSymbol) return "NASDAQ:AAPL";
    return `${baseTokenSymbol}:${quoteTokenSymbol}`;
  }, [quoteTokenSymbol, baseTokenSymbol]);
  return (
    <ChartContainer>
      <TradingViewStockChartWidget
        symbol={"NASDAQ:AAPL"}
        theme="Dark"
        range="10m"
      />
    </ChartContainer>
  );
}
