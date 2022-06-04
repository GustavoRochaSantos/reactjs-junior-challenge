interface PaginationItemProps {
  number: number;
  onPageChange: (number: number) => void;
  isCurrent?: boolean;
}

export function PaginationItem({
  number,
  onPageChange,
  isCurrent = false,
}: PaginationItemProps) {
  if (isCurrent) {
    return (
      <button
        onClick={() => onPageChange(number)}
        className="w-8 h-8 border-2 text-white border-stone-200 p-1 rounded-sm flex justify-center items-center bg-slate-500 hover:bg-transparent"
      >
        {number}
      </button>
    );
  } else {
    return (
      <button
        onClick={() => onPageChange(number)}
        className="w-8 h-8 border-2 border-stone-200 p-1 rounded-sm flex justify-center items-center bg-white hover:bg-transparent"
      >
        {number}
      </button>
    );
  }
}
