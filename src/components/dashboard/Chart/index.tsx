import { useMemo } from "react";
import { TradingViewStockChartWidget } from "react-tradingview-components";
import { styled } from "styled-components";

const ChartContainer = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
`;

const WidgetWrapper = styled.div`
  width: 100%;
  height: 100vh;

  & > iframe {
    width: 100% !important;
    height: 100% !important;
  }
`;
export default function Chart({
  baseTokenSymbol,
  quoteTokenSymbol,
}: {
  baseTokenSymbol: string | undefined;
  quoteTokenSymbol: string | undefined;
}): React.ReactNode {
  const symbol = useMemo(() => {
    if (!baseTokenSymbol || !quoteTokenSymbol) return "NASDAQ:AAPL";
    return `${baseTokenSymbol}:${quoteTokenSymbol}`;
  }, [quoteTokenSymbol, baseTokenSymbol]);
  return (
    <ChartContainer>
      <WidgetWrapper>
        <TradingViewStockChartWidget
          symbol={symbol}
          theme="Dark"
          range="10m"
          autosize
          allow_symbol_change
          style="2"
        />
      </WidgetWrapper>
    </ChartContainer>
  );
}
