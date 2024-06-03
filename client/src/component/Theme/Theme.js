import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Theme() {
  const [theme, settheme] = useState(false);

  useEffect(() => {
    if (window.matchMedia("theme:dark").matches) {
      settheme("dark");
    } else {
      settheme("light");
    }
  }, []);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  const handleclick = () => {
    settheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="theme fixed right-0 left-5 top-[50px] z-[999]">
      <button className="text-2xl" onClick={handleclick}>
        {theme === "dark" ? (
          <FaMoon className=" text-yellow-500" />
        ) : (
          <FaSun className="" />
        )}
      </button>
    </div>
  );
}
