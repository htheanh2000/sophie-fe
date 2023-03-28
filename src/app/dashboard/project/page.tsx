"use client";
import React, { useMemo, useState, useEffect } from "react";
import DashboardHeader from "@/components/dashboard-header";
import Icon from "@/components/icon";

const Project = () => {
  return (
    <div className="w-full">
      <DashboardHeader />
      <section className="p-7 w-full overflow-hidden">
        <div className="flex items-center">
          <Icon className="mr-2" name="dashboard" />
          <h3>Math</h3>
        </div>
        <div className="mt-4 flex">
          {datamock.map((item) => (
            <Card key={item.subject} {...item} />
          ))}
        </div>

        <div className="flex items-center mt-16">
          <Icon className="mr-2" name="dashboard" />
          <h3>Physics</h3>
        </div>
        <div className="mt-4 flex">
          {datamock.map((item) => (
            <Card key={item.subject} {...item} />
          ))}
        </div>

        <div className="flex items-center mt-16">
          <Icon className="mr-2" name="dashboard" />
          <h3>Chemistry</h3>
        </div>
        <div className="mt-4 flex ">
          {datamock.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
        
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
  {
    subject: "math",
    average: "9.0",
    increment: 3.46,
  },
//   {
//     subject: "physics",
//     average: "8.5",
//     increment: 4.46,
//   },
//   {
//     subject: "chemistry",
//     average: "8.0",
//     increment: -5.46,
//   },
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
      className={`bg-${THEMES[subject]}-100 border p-4 rounded-lg relative mr-6 cursor-pointer hover:shadow-md`}
    >
      <h2 className="mb-4 capitalize">{subject}</h2>
      <h4 className="mb-4">Average: {average}/10</h4>
      <div className="flex w-72">
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

export default Project;
