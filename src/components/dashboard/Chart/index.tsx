import { useMemo } from "react";
import { TradingViewStockChartWidget } from "react-tradingview-components";
import { styled } from "styled-components";

const ChartContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  flex: 1; /* Take up all available space */
  min-width: 0; /* This prevents flex item from overflowing */
  position: relative; /* For absolute positioning of the chart */
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
    return baseTokenSymbol + ":" + quoteTokenSymbol;
  }, [quoteTokenSymbol, baseTokenSymbol]);
  return (
    <ChartContainer>
      <TradingViewStockChartWidget
        symbol={"NASDAQ:AAPL"}
        theme="Dark"
        range="10m"
        tyle={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
    </ChartContainer>
  );
}
