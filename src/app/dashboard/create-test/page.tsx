"use client";
import React from "react";
import DashboardHeader from "@/components/dashboard-header";
import Dropdown from "@/components/dropdown";
import Field from "@/components/form/field";
import ErrorMessage from "@/components/form/errorMessage";
import Error from "@/components/form/error";
import { Formik } from "formik";
import * as Yup from "yup";
import AnswerForm from "./answerForm";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { ITest, createTest } from "@/store/features/test/test.api";
import Lottie from "react-lottie";
import Lottie_loading from "lottie/loading.json";


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

const durations = [
  {
    label: "15 phút",
    value: 15,
  },
  {
    label: "1 tiết (45 phút)",
    value: 45,
  },
  {
    label: "1 học kỳ (90 phút)",
    value: 90,
  },
  {
    label: "Thi thử đại học (150 phút)",
    value: 150,
  },
];

const CreateTest = () => {
  const { data: user } = useAppSelector((state) => state.user);
  const { status, error } = useAppSelector((state) => state.test);
  const initialValues = {
    question: "e87c2513-c01e-4e73-8e3e-008a20b69d2f.pdf",
    subject: "",
    name: "",
    duration: "",
    owner: user && user.id,
    correctAnswer: [],
  };
  const dispatch = useAppDispatch();
  const onSubmit = (values: any, { setSubmitting }: any) => {
    setSubmitting(false);
    dispatch(createTest(values));
  };

  const validationSchema = Yup.object({
    subject: Yup.string().required(),
    name: Yup.string().required(),
    duration: Yup.number().required(),
    correctAnswer: Yup.array()
      .of(Yup.string().required("This field is required"))
      .min(1, "Answer must include at least 1 elements")
      .max(50, "Answer must include maximum 50 elements"),
  });
  return (
    <div className="w-full">
      <DashboardHeader />
      <section className="p-7 w-full   ">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {(formik) => (
            <div className="w-full max-w-2lg mr-8">
              <h6 className="mt-2 pb-3 ml-1 capitalize font-semibold">
                Select subject
              </h6>
              <Dropdown
                onChange={(option) =>
                  formik.setFieldValue("subject", option.value)
                }
                className=""
                options={options}
              />
              <ErrorMessage name={"subject"}></ErrorMessage>

              <h6 className="mt-8 pb-3 ml-1 capitalize font-semibold">
                Select duration
              </h6>
              <Dropdown
                onChange={(option) =>
                  formik.setFieldValue("duration", option.value)
                }
                className=""
                options={durations}
              />
              <ErrorMessage name={"duration"}></ErrorMessage>

              <Field
                className="mt-4"
                label={`name`}
                placeholder="eg. Đề thi thử vật lý 12"
                name={"name"}
              />

              <div className="w-full h-1 my-4 border-b-[1px]" />
              {error && <Error className="mb-4">{error}</Error>}
              <a className="text-blue-600" target="_blank" href={process.env.NEXT_PUBLIC_S3_STATIC +  "e87c2513-c01e-4e73-8e3e-008a20b69d2f.pdf"}>Open link in new tab</a>
              <iframe
                className="w-full "
                height={700}
                src={
                  process.env.NEXT_PUBLIC_S3_STATIC +
                  "e87c2513-c01e-4e73-8e3e-008a20b69d2f.pdf"
                }
              />
              <AnswerForm
                onSubmit={(values) => {
                  console.log("values", values);
                   formik.setFieldValue("correctAnswer", values);
                    setTimeout(() => {
                      formik.submitForm();
                    }, 0)
                }}
              />
              <ErrorMessage name={"correctAnswer"}></ErrorMessage>
            </div>
          )}
        </Formik>
      </section>
      {status === "loading" && (
        <div className="w-screen h-screen flex items-center justify-center fixed top-0 left-0 bg-gray/20">
          <Lottie
          options={{
            loop: false,
            autoplay: true,
            animationData: Lottie_loading,
          }}
          height={800}
          width={800}
        />
        </div>
      )}
    </div>
  );
};

export default CreateTest;
