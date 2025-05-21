import * as React from "react";
import { ChevronDown, ChevronUp, Inbox } from "lucide-react";
import { useTranslations } from "next-intl";
import { OrderType, TypeOfFilterHeader } from "@/interfaces/common.interface";
import HeadFilters, { RenderComponentHeadFilter } from "./HeadFilters";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "@/components/ui/table";
import CommonIcons from "@/components/CommonIcons";

import { Skeleton } from "@/components/ui/skeleton";
import { twMerge } from "tailwind-merge";

// Type definitions
export interface HeadCell<T> {
  id: keyof any;
  label?: string | React.ReactNode;
  numeric?: boolean;
  disableSort?: boolean;
  renderFilters?: RenderComponentHeadFilter;
  Cell?: (row: T, index?: number) => React.ReactElement;
  isHided?: boolean;
}

interface TableCommonProps<T> {
  order: OrderType;
  orderBy: any;
  selected: readonly (string | number)[];
  page: number;
  rowsPerPage: number;
  rows: T[];
  headCells: HeadCell<T>[];
  totalCount: number;
  handleChangePage: (newPage: number) => void;
  handleSelectAllClick?: (
    event: React.ChangeEvent<HTMLInputElement>,
    rows: T[],
    key?: string
  ) => void;
  handleCheckBox?: (value: T, key: string) => void;
  handleRequestSort: (property: keyof any) => void;
  handleChangeRowsPerPage: (newRowsPerPage: number) => void;
  showCheckBox?: boolean;
  keyPrimary?: string;
  isLoading?: boolean;
  sortByIsActived?: string[];
  classNameContainer?: string;
}

const getPageNumbers = (currentPage: number, totalPages: number) => {
  const delta = 2;
  const range = [];
  const rangeWithDots = [];

  for (
    let i = Math.max(2, currentPage - delta);
    i <= Math.min(totalPages - 1, currentPage + delta);
    i++
  ) {
    range.push(i);
  }

  if (currentPage - delta > 2) {
    rangeWithDots.push(1, "...");
  } else {
    rangeWithDots.push(1);
  }

  rangeWithDots.push(...range);

  if (currentPage + delta < totalPages - 1) {
    rangeWithDots.push("...", totalPages);
  } else if (totalPages > 1) {
    rangeWithDots.push(totalPages);
  }

  return rangeWithDots;
};

// Thêm hàm helper này sau hàm getPageNumbers
const isPageValid = (page: number, rowsPerPage: number, totalCount: number) => {
  return page * rowsPerPage < totalCount;
};

function TableCommon<T>({
  order,
  orderBy,
  selected,
  page,
  rowsPerPage,
  rows,
  headCells,
  totalCount,
  showCheckBox,
  keyPrimary = "id",
  isLoading,
  handleCheckBox,
  handleChangePage,
  handleSelectAllClick,
  handleRequestSort,
  sortByIsActived,
  classNameContainer,
}: TableCommonProps<T>) {
  const t = useTranslations();

  // Check if an item is selected
  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  // Calculate if there are empty rows
  // const emptyRows = page > 1 ? Math.max(0, (1 + page) * rowsPerPage - totalCount) : 0;

  // Pagination options
  // const rowsPerPageOptions = [5, 10, 25];

  // Generate skeleton rows for loading state
  const renderSkeletonRows = () => {
    return Array.from({ length: 5 }).map((_, index) => (
      <TableRow key={`skeleton-row-${index}`} className="border-t border-gray-200">
        {showCheckBox && (
          <TableCell className="p-5 w-12">
            <Skeleton className="h-4 w-4 rounded" />
          </TableCell>
        )}
        {headCells
          .filter((cell) => !cell.isHided)
          .map((_, cellIndex) => (
            <TableCell key={`skeleton-cell-${index}-${cellIndex}`} className="p-5">
              <Skeleton className="h-6 w-full" />
            </TableCell>
          ))}
      </TableRow>
    ));
  };

  return (
    <div className="w-full">
      <div
        className={twMerge(
          "w-full rounded-md bg-white border border-gray-200 overflow-hidden",
          classNameContainer
        )}
      >
        <div className="overflow-x-auto">
          <Table className="w-full border-collapse">
            <TableHeader className="bg-gray-50">
              <TableRow>
                {showCheckBox && (
                  <TableCell className="p-5 w-12">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      checked={rows.length > 0 && selected.length === totalCount}
                      onChange={(e) =>
                        handleSelectAllClick && handleSelectAllClick(e, rows, keyPrimary)
                      }
                    />
                  </TableCell>
                )}

                {headCells.map((headCell, index) => {
                  if (headCell.isHided) {
                    return null;
                  }

                  const hasFilters = !!headCell?.renderFilters;
                  const isActive = orderBy === headCell.id;
                  const fieldCanSortBy = !sortByIsActived?.includes(headCell.id?.toString());

                  return (
                    <TableCell
                      key={`header-${index}`}
                      className={`p-5 text-sm font-medium text-gray-900 ${headCell.numeric ? "text-right" : "text-left"}`}
                    >
                      <div className="flex items-center">
                        {!headCell.disableSort && fieldCanSortBy ? (
                          <button
                            className="flex items-center gap-1 hover:text-primary-700 transition-colors"
                            onClick={() => handleRequestSort(headCell.id)}
                          >
                            {headCell.label}
                            {isActive && (
                              <span className="ml-1">
                                {order === "asc" ? (
                                  <ChevronUp className="h-4 w-4" />
                                ) : (
                                  <ChevronDown className="h-4 w-4" />
                                )}
                              </span>
                            )}
                          </button>
                        ) : (
                          <span>{headCell.label}</span>
                        )}

                        {hasFilters && (
                          <div className="ml-2">
                            <HeadFilters
                              type={TypeOfFilterHeader.dialog}
                              renderComponent={headCell.renderFilters}
                            />
                          </div>
                        )}
                      </div>
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHeader>

            <TableBody>
              {isLoading ? (
                renderSkeletonRows()
              ) : (
                <>
                  {rows.length > 0 ? (
                    rows.map((row, rowIndex) => {
                      const rowAny = row as any;
                      const isItemSelected = isSelected(rowAny?.[keyPrimary] || "");

                      return (
                        <TableRow
                          key={`row-${rowIndex}`}
                          className={`border-t border-gray-200 ${isItemSelected ? "bg-blue-50" : "hover:bg-gray-50 transition-colors"}`}
                        >
                          {showCheckBox && (
                            <TableCell className="p-5">
                              <input
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                checked={isItemSelected}
                                onChange={() => handleCheckBox && handleCheckBox(row, keyPrimary)}
                              />
                            </TableCell>
                          )}

                          {headCells.map((headCell, cellIndex) => {
                            if (headCell.isHided) {
                              return null;
                            }

                            return (
                              <TableCell
                                key={`cell-${rowIndex}-${cellIndex}`}
                                className={`p-5 text-sm text-gray-700 ${headCell.numeric ? "text-right" : "text-left"}`}
                              >
                                {headCell?.Cell?.(rowAny, rowIndex + 1) || rowAny?.[headCell?.id]}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })
                  ) : (
                    <TableRow>
                      <TableCell
                        colSpan={headCells.length + (showCheckBox ? 1 : 0)}
                        className="p-12"
                      >
                        <div className="flex flex-col items-center justify-center gap-3">
                          <Inbox className="h-12 w-12 text-gray-400" strokeWidth={1.5} />
                          <p className="text-gray-500 font-medium">No data</p>
                        </div>
                      </TableCell>
                    </TableRow>
                  )}
                </>
              )}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3">
          <div className="flex flex-1 justify-between sm:hidden">
            <button
              onClick={() => handleChangePage(Math.max(1, page - 1))}
              disabled={page <= 1 || isLoading}
              className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 transition-colors"
            >
              Previous
            </button>
            <button
              onClick={() => handleChangePage(page + 1)}
              disabled={page * rowsPerPage >= totalCount || isLoading}
              className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 transition-colors"
            >
              Next
            </button>
          </div>
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center">
            <div className="flex items-center justify-center">
              {/* <label className="mr-4 text-sm text-gray-700 font-medium text-nowrap">Rows per page:</label>
              {isLoading ? (
                <Skeleton className="h-9 w-28" />
              ) : (
                <Select
                  value={rowsPerPage?.toString()}
                  onValueChange={(value) => handleChangeRowsPerPage(Number(value))}
                  disabled={isLoading}
                >
                  <SelectTrigger className="min-w-[70px] focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-500">
                    <SelectValue className="" placeholder="Select rows" />
                  </SelectTrigger>
                  <SelectContent>
                    {rowsPerPageOptions.map((option) => (
                      <SelectItem key={option} value={option.toString()}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )} */}
              <nav className="ml-4 inline-flex space-x-1 rounded-md" aria-label="Pagination">
                {isLoading ? (
                  <>
                    <Skeleton className="h-9 w-9 rounded-md" />
                    <Skeleton className="h-9 w-9 rounded-md" />
                    <Skeleton className="h-9 w-9 rounded-md" />
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => handleChangePage(Math.max(1, page - 1))}
                      disabled={page <= 1}
                      className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 transition-colors"
                    >
                      <span className="sr-only">Previous</span>
                      <CommonIcons.ChevronLeft className="h-5 w-5" />
                    </button>

                    {getPageNumbers(
                      isPageValid(page, rowsPerPage, totalCount)
                        ? page
                        : Math.ceil(totalCount / rowsPerPage),
                      Math.ceil(totalCount / rowsPerPage)
                    ).map((pageNum, index) => {
                      return (
                        <React.Fragment key={index}>
                          {pageNum === "..." ? (
                            <span className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700">
                              ...
                            </span>
                          ) : (
                            <button
                              onClick={() => handleChangePage(Number(pageNum))}
                              className={`relative inline-flex items-center px-4 py-2 text-sm font-medium ${
                                page === pageNum
                                  ? "bg-blue-50 text-accent-blue border border-accent-blue"
                                  : "text-gray-700 hover:bg-gray-50 border border-gray-300"
                              } rounded-md transition-colors`}
                            >
                              {pageNum}
                            </button>
                          )}
                        </React.Fragment>
                      );
                    })}

                    <button
                      onClick={() => handleChangePage(page + 1)}
                      disabled={!isPageValid(page, rowsPerPage, totalCount)}
                      className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 transition-colors"
                    >
                      <span className="sr-only">Next</span>
                      <CommonIcons.ChevronRight className="h-5 w-5" />
                    </button>
                  </>
                )}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableCommon;
