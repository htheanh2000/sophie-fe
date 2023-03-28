"use client";
import React from "react";
import Field from "@/components/form/field";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import Button from "@/components/button";

interface IIprops {
    questionId: string;
    onSubmit: (values: any) => void
}

const QuestionForm = (props : IIprops) => {
  const initialValues = {
    question: "",
    a: "",
    b: "",
    c: "",
    d: "",
  };

  const onSubmit = (values: any, { setSubmitting , resetForm}: any) => {
    console.log(values);
    props.onSubmit(values)
    setSubmitting(false);
    resetForm()
  };

  const validationSchema = Yup.object({
    question: Yup.string().required(),
    a: Yup.string().required(),
    b: Yup.string().required(),
    c: Yup.string().required(),
    d: Yup.string().required(),
  });
  return (
    <div className="w-full">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Form className="w-full max-w-lg ">
            <div className="mt-4">
              <h3> Question {props.questionId} </h3>
              <Field
                label={`question`}
                placeholder="eg. Giới hạn nhìn rõ của mắt là ?"
                name={"question"}
              />

              <Field
                className="mt-4"
                label={`Answer A:`}
                placeholder="eg. Từ điểm cực viễn đến sát mắt."
                name="a"
              />
              <Field
                className="mt-4"
                label={`Answer B:`}
                placeholder="eg. Khoảng cách từ điểm cực cận đến điểm cực viễn của mắt."
                name="b"
              />
              <Field
                className="mt-4"
                label={`Answer C:`}
                placeholder="eg. Những vị trí mà khi đặt vật tại đó mắt còn có thể quan sát rõ"
                name="c"
              />
              <Field
                className="mt-4"
                label={`Answer D:`}
                placeholder="eg. Từ vô cực đến cách mắt khoảng 25cm."
                name="d"
              />
            </div>
            <div className="float-right">
              <Button
                type="submit"
                className="mt-8 w-full mx-auto"
                style={
                  formik.isValid && !formik.isSubmitting ? "primary" : "disable"
                }
              >
                Add Question
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default QuestionForm;
