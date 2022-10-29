import { useState } from "react";

export const Header = () => {
  const [activateDarkMode, setActivateDarkMode] = useState<boolean>(false);

  const container = document.querySelector("body");
  activateDarkMode
    ? container?.classList.add("dark-mode")
    : container?.classList.remove("dark-mode");

  return (
    <div className="header">
      <h1 className={activateDarkMode ? "header-title" : ""}>Notes</h1>
      <button
        className="save"
        onClick={() => setActivateDarkMode(!activateDarkMode)}
      >
        Toogle Mode
      </button>
    </div>
  );
};
