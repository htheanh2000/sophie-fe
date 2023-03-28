"use client";
import React, {
  useMemo,
  useState,
  useEffect,
  InputHTMLAttributes,
  useRef,
} from "react";
import DashboardHeader from "@/components/dashboard-header";
import Icon from "@/components/icon";
import Dropdown from "@/components/dropdown";
import Field from "@/components/form/field";
import { Formik } from "formik";
import * as Yup from "yup";
import Button from "@/components/button";
import Input from "@/components/input";
import QuestionForm from "./questionForm";
import QuestionList from "./questionList";
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
  const [questions, setQuestions] = useState<any[]>([]);
  const addQuestion = (values: any) => {
    console.log("-- add Question ---");
    const newQuestions = [...questions,values ]
    setQuestions(newQuestions)
    console.log('--- questions list ---');
    console.log(questions);
    
    
  };
  const initialValues = {};

  const onSubmit = (values: any, { setSubmitting }: any) => {
    console.log(values);
    setSubmitting(false);
  };

  const validationSchema = Yup.object({});
  return (
    <div className="w-full">
      <DashboardHeader />
      <section className="p-7 w-full  flex ">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {(_formik) => (
            <div className="w-full max-w-lg mr-32">
              {/* Select Subject */}
              {/* <h2> Create a test</h2> */}
              <h6 className="mt-2 pb-3 ml-1 capitalize font-semibold">
                Select subject
              </h6>
              <Dropdown className="" options={options} />
              <Field
              className="mt-4"
                label={`test name`}
                placeholder="eg. Đề thi thử vật lý 12"
                name={"test-name"}
              />
              <div className="w-full h-1 my-4 border-b-[1px]"/>
              <QuestionForm onSubmit={addQuestion} questionId={(questions.length + 1).toString()}/>
              <div className="flex float-right">
                <Button style="secondary" className="mt-8 mr-8" type="submit">
                  Create an test
                </Button>
              </div>
            </div>
          )}
        </Formik>
        <QuestionList questionList={questions}/>
      </section>
    </div>
  );
};

export default CreateTest;
