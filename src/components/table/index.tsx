import React, { useState } from "react";
import { useFilters, useSortBy, useTable } from "react-table";
import Input from "../input";
import Pagination from "../pagination";
export default function Table({ columns, data }: any) {
  // Use the useTable Hook to send the columns and data to build the table
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    // setFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useSortBy
  );
  const [filterInput, setFilterInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const handleFilterChange = (e: any) => {
    const value = e.target.value || undefined;
    // setFilter("show.name", value);
    setFilterInput(value);
  };

  const onchangePage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="my-4">
        <Input
          value={filterInput}
          onChange={handleFilterChange}
          placeholder={"Search..."}
        />
      </div>
      <table className="w-full border-collapse">
        <thead>
          {headerGroups.map((headerGroup, index) => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              key={index}
              className="border-b-[1px] border-gray/20"
            >
              {headerGroup.headers.map((column,index) => (
                <th
                  {...column.getHeaderProps()}
                  key={index}
                  className="p-3  uppercase text-xs text-left text-gray-600 "
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                key={i}
                className={`hover:bg-gray/10 cursor-pointer`}
              >
                {row.cells.map((cell, index) => {
                  return (
                    <td {...cell.getCellProps()} key={index} className="p-3 text-sm  ">
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <Pagination
        className="w-fit mx-auto"
        currentPage={currentPage}
        totalCount={data.totalResults || 200}
        pageSize={data.limit || 10}
        onPageChange={onchangePage}
        siblingCount={1}
      />
    </div>
  );
}
