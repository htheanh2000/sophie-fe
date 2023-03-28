"use client";
import React, { useMemo, useState, useEffect } from "react";
import DashboardHeader from "@/components/dashboard-header";
import Icon from "@/components/icon";
import Dropdown from "@/components/dropdown";
import Field from "@/components/form/field";
import { Formik } from "formik";
import * as Yup from "yup";
const options = [
  {
    label: "Toán",
    value: "math",
  },
  {
    label: "Ngữ văn",
    value: "literature",
  },
  {
    label: "Vật lý",
    value: "physical",
  },
  {
    label: "Hóa học",
    value: "chemicstry",
  },
  {
    label: "Tiếng anh",
    value: "english",
  },
  {
    label: "Lịch sử",
    value: "history",
  },
  {
    label: "Địa lý",
    value: "graph",
  },
  {
    label: "Giáo dục công dân",
    value: "civic-education",
  },
  {
    label: "Sinh học",
    value: "biology",
  },
];
const CreateTest = () => {
  const initialValues = {};

  const onSubmit = (values: any, { setSubmitting }: any) => {
    console.log(values);
    setSubmitting(false);
  };

  const validationSchema = Yup.object({});
  return (
    <div className="w-full">
      <DashboardHeader />
      <section className="p-7 w-full min-h-screen">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {(_formik) => (
            <div className="w-full max-w-lg">
              {/* Select Subject */}
              <h2> Create a test</h2>
              <h6 className="mt-8 pb-3 ml-1 capitalize font-semibold">Select subject</h6>
              <Dropdown className="" options={options} />
              <Field className="mt-8" label="name" name="name" />
            </div>
          )}
        </Formik>
      </section>
    </div>
  );
};

export default CreateTest;
