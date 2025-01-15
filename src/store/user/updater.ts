import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { updateDarkMode } from "./actions";

export default function UserUpdater(): null {
  const dispatch = useAppDispatch();
  const darkMode = useAppSelector((state) => state.user.darkMode);

  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme !== null) {
        dispatch(updateDarkMode({ darkMode: savedTheme === "dark" }));
      }
    } catch (error) {
      console.error("Failed to load theme preference:", error);
    }
  }, [dispatch]);

  useEffect(() => {
    try {
      localStorage.setItem("theme", darkMode ? "dark" : "light");
    } catch (error) {
      console.error("Failed to save theme preference:", error);
    }
  }, [darkMode]);

  return null;
}
