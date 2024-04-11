import React from "react";

const Header = ({ theme, setTheme }) => {
  return (
    <div className="flex justify-between items-center">
      <h3
        className={`text-xl font-bold ${
          theme === "theme-1"
            ? "text-theme-1-white"
            : theme === "theme-2"
            ? "text-theme-2-text-dark"
            : "text-theme-3-text-light"
        }`}
      >
        Calc
      </h3>
      <div className="flex items-center gap-5">
        <h3
          className={`text-sm font-bold ${
            theme === "theme-1"
              ? "text-theme-1-white"
              : theme === "theme-2"
              ? "text-theme-2-text-dark"
              : "text-theme-3-text-light"
          }  `}
        >
          THEME
        </h3>
        <div
          className={`mt-1 flex ${
            theme === "theme-1"
              ? "justify-start"
              : theme === "theme-2"
              ? "justify-center"
              : "justify-end"
          } items-center p-2 relative rounded-full w-[90px] ${
            theme === "theme-1"
              ? "bg-theme-1-toggle-background"
              : theme === "theme-2"
              ? "bg-theme-2-toggle-background"
              : "bg-theme-3-toggle-background"
          }`}
        >
          <button
            className={`w-[25px] aspect-square rounded-full ${
              theme === "theme-1"
                ? "theme-1-toggle-btn"
                : theme === "theme-2"
                ? "theme-2-toggle-btn"
                : "theme-3-toggle-btn"
            } `}
          />
          <div className="flex justify-around items-center w-full absolute top-[-25px] z-40 left-0">
            {Array(3)
              .fill(0)
              .map((_, index) => (
                <button
                  key={index}
                  onClick={() => setTheme(`theme-${index + 1}`)}
                  className={`text-sm font-bold ${
                    theme === "theme-1"
                      ? "text-theme-1-white"
                      : theme === "theme-2"
                      ? "text-theme-2-text-dark"
                      : "text-theme-3-text-light"
                  } `}
                >
                  {index + 1}
                </button>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
