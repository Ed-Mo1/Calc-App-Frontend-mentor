const OperationBtn = ({theme, operation, dispatch }) => {
  function SetIcon(operation) {
    switch (operation) {
      case "+":
        return "+";
      case "-":
        return "-";
      case "*":
        return "x";
      case "/":
        return "÷";
      default:
        return;
    }
  }
  return (
    <button
      className={`${
        theme === "theme-1"
          ? "theme-1-btn"
          : theme === "theme-2"
          ? "theme-2-btn"
          : "theme-3-btn"
      }`}
      onClick={() =>
        dispatch({ type: "CHOOSE_OPERATION", payload: { operation } })
      }
    >
      {SetIcon(operation)}
    </button>
  );
};

export default OperationBtn;
