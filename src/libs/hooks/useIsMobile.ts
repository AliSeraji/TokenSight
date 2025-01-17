import { useMemo } from "react";
import { BREAKPOINTS } from "styles";
import useWindowSize from "./useWindowsSize";

export function useIsMobile() {
  const { width } = useWindowSize();
  const isMobile = useMemo(() => width <= BREAKPOINTS.md, [width]);
  return useMemo(() => isMobile, [isMobile]);
}
