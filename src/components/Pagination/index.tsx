// ----------Components---------
import { PaginationItem } from "./PaginationItem";

// ----------Hooks---------
import { useClients } from "../../hooks/useClients";

interface PaginationProps {
  currentPage: number;
  onPageChange: (number: number) => void;
}

// The amount of nearby pages shown
const sibilingsCount = 1;

// Generates an array with the numbers of the pages in each element of the array
function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter((page) => page > 0);
}

export function Pagination({ currentPage, onPageChange }: PaginationProps) {
  const { clients } = useClients();

  const totalCountClients = clients.length;
  const clientsPerPage = 6; // Amount of clients per page
  const lastPage = Math.ceil(totalCountClients / clientsPerPage); // Takes the total amount and rounds up

  // If the current page is greater than 1 it takes the next previous page
  const previousPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - sibilingsCount, currentPage - 1)
      : [];

  // If the current page is lower than the last page it takes the after next page if the next page is bigger than the last it will take the last page
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

        {/* If the current page is more than 2 it will show the first page fixed */}
        {currentPage > 1 + sibilingsCount && (
          <>
            <PaginationItem onPageChange={onPageChange} number={1} />
            {currentPage > 2 + sibilingsCount && (
              <p className="text-lg text-slate-400">...</p>
            )}
          </>
        )}

        {/* It shows the previous pages if had some */}
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

        {/* It`s the current page highlighted */}
        <PaginationItem
          onPageChange={onPageChange}
          number={currentPage}
          isCurrent
        />

        {/* If had pages after the current it will show them */}
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

        {/* Verify if the current page plus nearby pages are smaller than the last and shows the last page fixed if true */}
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
