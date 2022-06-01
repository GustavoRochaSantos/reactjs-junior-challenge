import { Reducer } from "react";

type ButtonProps = {
  children: string;
  color?: "gray" | "red";
  buttonFunction?: () => void;
};

export function Button({ children, color, buttonFunction }: ButtonProps) {
  return (
    <>
      {color === "gray" ? (
        <button
          onClick={buttonFunction}
          className="h-12 bg-slate-500 text-white p-2 rounded-lg font-semibold hover:bg-slate-800 active:border-slate-500 active:border-2"
        >
          {children}
        </button>
      ) : (
        <button
          onClick={buttonFunction}
          className="h-12 bg-red-600 text-white p-2 rounded-lg font-semibold hover:bg-red-800 active:border-red-600 active:border-2"
        >
          {children}
        </button>
      )}
    </>
  );
}
