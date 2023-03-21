import { usePagination, DOTS } from "@/hook/usePagination";
import Icon from "../icon";

type Props = {
  onPageChange: (arg0: number) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
  className: string;
};

const Pagination = (props: Props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange: any = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ul className={`flex  list-none justify-center mt-8 ${className}`}>
      {/* Left navigation arrow */}
      {currentPage !== 1 && (
        <li
          className={`w-10 h-10 flex justify-center items-center group border m-2 rounded cursor-pointer hover:bg-violet-600 hover:text-white`}
          onClick={onPrevious}
        >
          <Icon
            size="lg"
            name="arrow-left-no-cirle"
            className="group-hover:invert"
          />
        </li>
      )}

      {paginationRange.map((pageNumber: any, index: number) => {
        if (pageNumber === DOTS) {
          return (
            <li
              key={pageNumber + index}
              className="p-2 h-8 text-center m-2 cursor-pointer"
            >
              ...
            </li>
          );
        }
        return (
          <li
            key={pageNumber}
            className={`w-10 h-10 text-bold text-xl flex justify-center items-center  border text-center m-2 rounded cursor-pointer ${
              pageNumber === currentPage
                ? "bg-violet-600 text-white"
                : " hover:bg-violet-600 hover:text-white"
            }`}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}

      {currentPage !== lastPage && (
        <li
          className={`w-10 h-10 flex justify-center items-center group border m-2 rounded cursor-pointer hover:bg-violet-600 hover:text-white `}
          onClick={onNext}
        >
          <Icon
            size="lg"
            name="arrow-right-no-cirle"
            className="group-hover:invert"
          />
        </li>
      )}
      {/* Right Navigation arrow */}
    </ul>
  );
};

export default Pagination;
