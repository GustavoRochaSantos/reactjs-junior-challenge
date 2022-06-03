import { useState } from "react";

export function Pagination() {
  const [page, setPage] = useState(1)
  const lastPage = 5
  return (
    <>
      <div className="flex justify-center gap-2">
        <button className="w-8 h-8 border-2 border-stone-200 p-1 rounded-sm flex justify-center items-center bg-white hover:bg-transparent">
          {"<"}
        </button>
        <button className="w-8 h-8 border-2 border-stone-200 p-1 rounded-sm flex justify-center items-center bg-white hover:bg-transparent">
          1
        </button>
        <button className="w-8 h-8 border-2 border-stone-200 p-1 rounded-sm flex justify-center items-center bg-white hover:bg-transparent">
          2
        </button>
        <button className="w-8 h-8 border-2 border-stone-200 p-1 rounded-sm flex justify-center items-center bg-white hover:bg-transparent">
          3
        </button>
        <button className="w-8 h-8 border-2 border-stone-200 p-1 rounded-sm flex justify-center items-center bg-white hover:bg-transparent">
          4
        </button>
        <button className="w-8 h-8 border-2 border-stone-200 p-1 rounded-sm flex justify-center items-center bg-white hover:bg-transparent">
          {">"}
        </button>
      </div>
    </>
  );
}
