import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { updateDarkMode, toggleTheme } from "./actions";

export function useIsDarkMode(): boolean {
  return useAppSelector((state) => state.user.darkMode);
}

export function useUpdateDarkMode() {
  const dispatch = useAppDispatch();
  return useCallback(
    (darkMode: boolean) => {
      dispatch(updateDarkMode({ darkMode }));
    },
    [dispatch]
  );
}

export function useToggleTheme() {
  const dispatch = useAppDispatch();
  return useCallback(() => {
    dispatch(toggleTheme());
  }, [dispatch]);
}
