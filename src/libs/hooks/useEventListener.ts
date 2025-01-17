import { RefObject, useEffect, useRef } from "react";

export default function useEventListener<
  T extends HTMLElement = HTMLDivElement,
>(
  eventName: keyof WindowEventMap | string,
  handler: (event: Event) => void,
  element?: RefObject<T>
) {
  // Create a ref with initial value of handler
  const savedHandler = useRef(handler);

  useEffect(() => {
    // Define the listening target
    const targetElement: T | Window = element?.current || window;
    if (!(targetElement && targetElement.addEventListener)) {
      return;
    }

    // Update saved handler if necessary
    savedHandler.current = handler;

    // Create event listener that calls handler function stored in ref
    const eventListener = (event: Event) => {
      savedHandler.current(event);
    };

    targetElement.addEventListener(eventName, eventListener);

    // Remove event listener on cleanup
    return () => {
      targetElement.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element, handler]);
}
