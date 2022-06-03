import { useClients } from "../../hooks/useClients";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
  currentPage: number;
  onPageChange: (number: number) => void;
}

const sibilingsCount = 1;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter((page) => page > 0);
}

export function Pagination({ currentPage, onPageChange }: PaginationProps) {
  const { clients } = useClients();
  const totalCountRegisters = clients.length;
  const registerPerPage = 6;
  const lastPage = Math.ceil(totalCountRegisters / registerPerPage);

  const previousPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - sibilingsCount, currentPage - 1)
      : [];

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + sibilingsCount, lastPage)
        )
      : [];

  return (
    <>
      <div className="flex justify-center gap-2">
        <button
          onClick={() => {
            if (currentPage > 1) {
              onPageChange(currentPage - 1);
            }
          }}
          className="w-8 h-8 border-2 border-stone-200 p-1 rounded-sm flex justify-center items-center bg-white hover:bg-transparent"
        >
          {"<"}
        </button>
        {currentPage > 1 + sibilingsCount && (
          <>
            <PaginationItem onPageChange={onPageChange} number={1} />
            {currentPage > 2 + sibilingsCount && (
              <p className="text-lg text-slate-400">...</p>
            )}
          </>
        )}

        {previousPages.length > 0 &&
          previousPages.map((page) => {
            return (
              <PaginationItem
                onPageChange={onPageChange}
                key={page}
                number={page}
              />
            );
          })}

        <PaginationItem onPageChange={onPageChange} number={currentPage} isCurrent />

        {nextPages.length > 0 &&
          nextPages.map((page) => {
            return (
              <PaginationItem
                onPageChange={onPageChange}
                key={page}
                number={page}
              />
            );
          })}

        {currentPage + sibilingsCount < lastPage && (
          <>
            {currentPage + 1 + sibilingsCount < lastPage && (
              <p className="text-lg text-slate-400">...</p>
            )}
            <PaginationItem onPageChange={onPageChange} number={lastPage} />
          </>
        )}

        <button
          onClick={() => {
            if (currentPage < lastPage) {
              onPageChange(currentPage + 1);
            }
          }}
          className="w-8 h-8 border-2 border-stone-200 p-1 rounded-sm flex justify-center items-center bg-white hover:bg-transparent"
        >
          {">"}
        </button>
      </div>
    </>
  );
}
