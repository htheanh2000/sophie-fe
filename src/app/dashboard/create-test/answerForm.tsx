"use client";
import React from "react";
import { FieldArray, Form, Formik } from "formik";
import Button from "@/components/button";
import Radio from "@/components/form/radio";

interface IIprops {
  onSubmit: (values: any) => void;
}
const OPTIONS = [
  {
    label: "A",
    value: "A",
  },
  {
    label: "B",
    value: "B",
  },
  {
    label: "C",
    value: "C",
  },
  {
    label: "D",
    value: "D",
  },
];
const AnswerForm = (props: IIprops) => {
  const initialValues = {
    options: [],
  };

  const onSubmit = (values: any, { setSubmitting, resetForm }: any) => {
    // console.log(values);
    props.onSubmit(values.options);
    setSubmitting(false);
    // resetForm();
  };

  return (
    <div className="w-full">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        // validationSchema={validationSchema}
      >
        {(formik) => (
          <Form className="w-full  ">
            <div className="mt-4 mr-4">
              <h3> Answer </h3>
            </div>
            <FieldArray
              name="options"
              render={(arrayHelpers) => (
                <div>
                  {formik.values.options && formik.values.options.length > 0 ? (
                    <div className="w-full">
                      <div className="grid grid-cols-4 place-items-center">
                        {formik.values.options.map((_, index) => (
                          <div key={index}>
                            <Radio
                              clasName="mt-4"
                              key={index}
                              label={"Câu " + (index + 1)}
                              name={`options.${index}`}
                              options={OPTIONS}
                            />
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-between flex-row-reverse">
                        <div className="flex ">
                        <Button
                          className="mt-4 mr-4"
                          type="button"
                          style="secondary"
                          onClick={() =>
                            arrayHelpers.remove(
                              formik.values.options.length - 1
                            )
                          }
                        >
                          Remove a Answer
                        </Button>
                        <Button
                          className="mt-4 mr-16"
                          type="button"
                          style="secondary"
                          onClick={() =>
                            arrayHelpers.insert(
                              formik.values.options.length,
                              "A"
                            )
                          }
                        >
                          Add a Answer
                        </Button>
                        </div>
                        <Button
                          type="submit"
                          className="mt-4 w-96"
                          style={
                            formik.isValid && !formik.isSubmitting
                              ? "primary"
                              : "disable"
                          }
                        >
                          Finish
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <Button
                      type="button"
                      style="secondary"
                      className="mt-4"
                      onClick={() =>
                        arrayHelpers.insert(formik.values.options.length, "A")
                      }
                    >
                      {/* show this when user has removed all options from the list */}
                      Add a Answer
                    </Button>
                  )}
                </div>
              )}
            />
            {/* <div className="mx-auto w-80">
              <Button
                type="submit"
                className="mt-8 w-full mx-auto"
                style={
                  formik.isValid && !formik.isSubmitting ? "primary" : "disable"
                }
              >
                Finish
              </Button>
            </div> */}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AnswerForm;
