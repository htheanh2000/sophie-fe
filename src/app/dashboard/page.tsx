"use client";
import React, { useMemo, useState, useEffect } from "react";
import DashboardHeader from "@/components/dashboard-header";
import Icon from "@/components/icon";
import MainTable from "@/components/table";
import Table from "@/components/table";
import Input from "@/components/input";

const Dashboard = () => {
  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "show.name",
      },
      {
        Header: "Type",
        accessor: "show.type",
      },
      {
        Header: "Language",
        accessor: "show.language",
      },
      {
        Header: "Genre(s)",
        accessor: "show.genres",
      },
      {
        Header: "Runtime",
        accessor: "show.runtime",
      },
      {
        Header: "Status",
        accessor: "show.status",
      },
    ],
    []
  );
 

  // data state to store the TV Maze API data. Its initial value is an empty array
  const [data, setData] = useState([]);

  // Using useEffect to call the API once mounted and set the data
  useEffect(() => {
    (async () => {
      const result = await fetch("https://api.tvmaze.com/search/shows?q=snow");
      const data = await result.json();
      setData(data);
    })();
  }, []);
  return (
    <div className="w-full">
      <DashboardHeader />
      <section className="p-7">
        <div className="flex items-center">
          <Icon className="mr-2" name="dashboard" />
          <h3>Overview</h3>
        </div>
        <div className="mt-4 flex">
          {datamock.map((item) => (
            <Card {...item} />
          ))}
        </div>

        <div className="flex items-center mt-16">
          <Icon className="mr-2" name="dashboard" />
          <h3>History</h3>
        </div>
       
        <Table columns={columns} data={data} />
      </section>
    </div>
  );
};

const datamock: ICard[] = [
  {
    subject: "math",
    average: "9.0",
    increment: 3.46,
  },
  {
    subject: "physics",
    average: "8.5",
    increment: 4.46,
  },
  {
    subject: "chemistry",
    average: "8.0",
    increment: -5.46,
  },
];

const THEMES = {
  math: "violet",
  physics: "orange",
  chemistry: "blue",
};

interface ICard {
  subject: "math" | "physics" | "chemistry";
  average: string;
  increment: number;
}
const Card = (props: ICard) => {
  const { subject, average, increment } = props;
  return (
    <div
      className={`bg-${THEMES[subject]}-100 w-80  p-4 rounded-lg relative mr-6 cursor-pointer hover:shadow-md`}
    >
      <h2 className="mb-4 capitalize">{subject}</h2>
      <h4 className="mb-4">Average: {average}/10</h4>
      <div className="flex">
        <Icon
          size="xs"
          className="mr-1"
          name={increment > 0 ? "arrow-up" : "arrow-down"}
        />
        <span>
          <strong className={increment > 0 ? "text-green-700" : "text-red-700"}>
            {increment}%
          </strong>{" "}
          period of change
        </span>
        <div className="absolute right-4 top-4 border rounded-md p-1">
          <Icon size="md" name="share" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
