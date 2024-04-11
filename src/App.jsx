import { useEffect, useReducer, useState } from "react";
import Header from "./components/Header";
import DigitBtn from "./components/DigitBtn";
import OperationBtn from "./components/OperationBtn";

const calcItems = [
  "7",
  "8",
  "9",
  "C",
  "4",
  "5",
  "6",
  "+",
  "1",
  "2",
  "3",
  "-",
  ".",
  "0",
  "/",
  "*",
  "AC",
  "=",
];

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_DIGIT":
      if (state.madeCalculation) {
        if (payload.digit === ".")
          return { ...state, currentOperand: "0.", madeCalculation: false };
        return {
          ...state,
          currentOperand: payload.digit,
          madeCalculation: false,
        };
      }
      if (payload.digit === "0" && state.currentOperand === "0") {
        return state;
      }
      if (payload.digit === "." && state.currentOperand.includes(".")) {
        return state;
      }
      if (payload.digit === "." && state.currentOperand === "0") {
        return {
          ...state,
          currentOperand: "0.",
        };
      }

      if (state.currentOperand === "0") {
        return {
          ...state,
          currentOperand: payload.digit,
        };
      }
      return {
        ...state,
        currentOperand: `${state.currentOperand}${payload.digit}`,
      };
    case "CHOOSE_OPERATION":
      if (state.currentOperand == "0") return state;
      if (state.currentOperand.slice(-1) == ".") return state;
      if (state.currentOperand && !state.previousOperand) {
        return {
          ...state,
          operation: payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: "0",
        };
      }

      return {
        ...state,
        madeCalculation: true,
        previousOperand: evaluate(state),
        operation: payload.operation,
        currentOperand: "0",
      };
    case "EVALUATE":
      if (!state.currentOperand || !state.previousOperand || !state.operation) {
        return state;
      }
      if (state.currentOperand.slice(-1) == ".") return state;

      return {
        ...state,
        currentOperand: evaluate(state),
        previousOperand: null,
        operation: null,
        madeCalculation: true,
      };
    case "DELETE_DIGIT":
      if (state.madeCalculation) {
        return {
          ...state,
          currentOperand: "0",
          madeCalculation: false,
        };
      }
      if (state.currentOperand == "0") return state;
      if (state.currentOperand.length >= 1) {
        return {
          ...state,
          currentOperand: state.currentOperand.slice(0, -1) || "0",
        };
      }
      break;
    case "CLEAR":
      return {
        currentOperand: "0",
        previousOperand: null,
        operation: null,
        madeCalculation: false,
      };
    default:
      return state;
  }
};
function evaluate({ currentOperand, previousOperand, operation }) {
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return;
  return eval(`${prev} ${operation} ${current}`).toString();
}
const App = () => {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {
      currentOperand: "0",
      previousOperand: null,
      operation: null,
      madeCalculation: false,
    }
  );
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "theme-1"
  );
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <div
      className={`flex py-10 px-5 justify-center items-center min-h-screen ${
        theme === "theme-1"
          ? "bg-theme-1-main-background"
          : theme === "theme-2"
          ? "bg-theme-2-main-background"
          : "bg-theme-3-main-background"
      }`}
    >
      <div className="w-full max-w-[600px] flex flex-col gap-8">
        <Header theme={theme} setTheme={setTheme} />
        <div
          className={`min-h-[140px] grid place-content-end shadow-sm ${
            theme === "theme-1"
              ? "bg-theme-1-screen-background text-theme-1-white"
              : theme === "theme-2"
              ? "bg-theme-2-screen-background text-theme-2-text-dark"
              : "bg-theme-3-screen-background text-theme-3-text-light"
          }   p-5 rounded-lg`}
        >
          <div className="text-[22px] flex justify-end items-center ">
            {previousOperand}
            {operation == "*" ? "×" : operation == "/" ? "÷" : operation}
          </div>
          <div className="text-[33px] text-right ">{currentOperand}</div>
        </div>
        <div
          className={`grid grid-cols-4 gap-5 p-5 ${
            theme === "theme-1"
              ? "bg-theme-1-toggle-background"
              : theme === "theme-2"
              ? "bg-theme-2-toggle-background"
              : "bg-theme-3-toggle-background"
          } rounded-lg  max-sm:gap-3`}
        >
          {calcItems.map((item, index) => {
            if (!isNaN(item) || item === ".") {
              return (
                <DigitBtn
                  theme={theme}
                  key={index}
                  digit={item}
                  dispatch={dispatch}
                />
              );
            } else if (item === "C") {
              return (
                <button
                  className={`${
                    theme === "theme-1"
                      ? "theme-1-clear-del-btn"
                      : theme === "theme-2"
                      ? "theme-2-clear-del-btn"
                      : "theme-3-clear-del-btn"
                  }
                `}
                  key={index}
                  onClick={() => dispatch({ type: "DELETE_DIGIT" })}
                >
                  DEL
                </button>
              );
            } else if (item === "AC") {
              return (
                <button
                  className={`col-span-2 ${
                    theme === "theme-1"
                      ? "theme-1-clear-del-btn"
                      : theme === "theme-2"
                      ? "theme-2-clear-del-btn"
                      : "theme-3-clear-del-btn"
                  } `}
                  key={index}
                  onClick={() => dispatch({ type: "CLEAR" })}
                >
                  Reset
                </button>
              );
            } else if (item === "=") {
              return (
                <button
                  className={`${
                    theme === "theme-1"
                      ? "theme-1-evaluate-btn"
                      : theme === "theme-2"
                      ? "theme-2-evaluate-btn"
                      : "theme-3-evaluate-btn"
                  }`}
                  key={index}
                  onClick={() => dispatch({ type: "EVALUATE" })}
                >
                  =
                </button>
              );
            } else if (["+", "-", "/", "*"].includes(item)) {
              return (
                <OperationBtn
                  key={index}
                  theme={theme}
                  operation={item}
                  dispatch={dispatch}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
