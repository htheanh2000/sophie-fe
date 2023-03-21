import React, { useState } from "react";
import { useFilters, useTable } from "react-table";
import Input from "../input";

export default function Table({ columns, data }: any) {
  // Use the useTable Hook to send the columns and data to build the table
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setFilter, // The useFilter Hook provides a way to set the filter
  } = useTable(
    {
      columns,
      data,
    },
    useFilters // Adding the useFilters Hook to the table
    // You can add as many Hooks as you want. Check the documentation for details. You can even add custom Hooks for react-table here
  );
  const [filterInput, setFilterInput] = useState("");

  // Update the state when input changes
  const handleFilterChange = (e: any) => {
    const value = e.target.value || undefined;
    setFilter("show.name", value); // Update the show.name filter. Now our table will filter and show only the rows which have a matching value
    setFilterInput(value);
  };
  /* 
    Render the UI for your table
    - react-table doesn't have UI, it's headless. We just need to put the react-table props from the Hooks, and it will do its magic automatically
  */
  return (
    <div>
      <div className="my-8">
        <Input
          value={filterInput}
          onChange={handleFilterChange}
          placeholder={"Search name"}
        />
      </div>
      <table className="w-full border-collapse">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              className="bg-gray-100 border-b-2 border-gray-300"
            >
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className="p-3 font-bold uppercase text-xs text-left text-gray-600"
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
                className={`${
                  i % 2 === 0 ? "bg-white" : "bg-gray-100"
                } border-b border-gray-300`}
              >
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      className="p-3 text-sm font-semibold text-gray-700"
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
