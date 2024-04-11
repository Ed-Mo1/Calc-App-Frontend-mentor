const DigitBtn = ({ theme,digit, dispatch }) => {
  return (
    <button
      className={`${
        theme === "theme-1"
          ? "theme-1-btn"
          : theme === "theme-2"
          ? "theme-2-btn"
          : "theme-3-btn"}
      `}
      onClick={() => dispatch({ type: "ADD_DIGIT", payload: { digit } })}
    >
      {digit}
    </button>
  );
};

export default DigitBtn;
