import React, { useState } from "react";
import useDarkSide from "../utils/useDarkSide";

export default function Switcher() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false,
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <>
      {/* <button
        onClick={() => toggleDarkMode(!darkSide)}
        className="px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black transition"
      >
        {darkSide ? "Light Mode" : "Dark Mode"}
      </button> */}
      
    </>
  );
}
