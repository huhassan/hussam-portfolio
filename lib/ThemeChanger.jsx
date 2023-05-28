import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsSun, BsMoon } from "react-icons/bs";

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleThemeChange = () => {
    if (theme === "dark" || resolvedTheme === "dark") {
      setTheme("light");
    } else if (theme === "light" || resolvedTheme === "light") {
      setTheme("dark");
    }
  };

  const isDarkTheme = theme === "dark" || resolvedTheme === "dark";
  const isLightTheme = theme === "light" || resolvedTheme === "light";

  return (
    <div>
      {isDarkTheme && (
        <div onClick={handleThemeChange}>
          <BsSun />
        </div>
      )}
      {isLightTheme && (
        <div onClick={handleThemeChange}>
          <BsMoon />
        </div>
      )}
    </div>
  );
};

export default ThemeChanger;
