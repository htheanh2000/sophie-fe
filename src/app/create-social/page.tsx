"use client";
import Button from "@/components/button";
import Container from "@/components/container";
import CustomDatePicker from "@/components/datepicker";
import Checkbox from "@/components/form/checkbox";
import ErrorMessage from "@/components/form/errorMessage";
import Field from "@/components/form/field";
import Radio from "@/components/form/radio";
import TagPicker from "@/components/tagpicker";
import { Form, Formik, Field as FormikField } from "formik";
import * as Yup from "yup";
import ChooseBanner from "./chooseBanner";
import { useAppDispatch } from "@/store/hooks";
import { createSocialAction } from "@/store/features/social/socialSlice";
import { notFound, redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { PRIVACYS, SOCIAL_TAGS } from "@/constant/social";

interface IForm {
  title: string;
  startAt: Date;
  venue: String;
  capacity: Number;
  price: Number;
  description: String;
  banner: String;
  tags: Array<String>;
  isManualApprove: Boolean;
  privacy: String;
}
const initialValues: IForm = {
  title: "Untitle Event",
  startAt: new Date(),
  venue: "",
  capacity: 0,
  price: 0,
  description: "",
  banner: "",
  tags: [],
  isManualApprove: false,
  privacy: "",
};

const CreateSocialPage = () => {
  const [tags, setTags] = useState<any>([]);
  // + title: String(Required)
  // + startAt: DateTime(Required)
  // + venue: String(Required)
  // + capacity: Number(Required)
  // + price: Number(Optional)
  // + description: String(Required)
  // + banner: String(Required)
  // + tags: Array<String>(Required)
  // + isManualApprove: Boolean(Optional)
  // + privacy: String(Required)
  const dispatch = useAppDispatch();
  const router = useRouter();
  const validationSchema = Yup.object({
    title: Yup.string().required(),
    date: Yup.date().required(),
    time: Yup.string().required(),
    venue: Yup.string().required(),
    capacity: Yup.number().required(),
    price: Yup.number(),
    description: Yup.string().required(),
    banner: Yup.string().required(),
    tags: Yup.array().min(1).required(),
    isManualApprove: Yup.boolean(),
    privacy: Yup.string().required(),
  });

  const onSubmit = async (values: any, { setSubmitting }: any) => {
    console.log("On submit");

    const body = {
      ...values,
      startAt: new Date(values.date + "T" + values.time + ":00"),
      tags: values.tags.map((tag: { value: string }) => tag.value),
    };
    const response = await dispatch(createSocialAction(body));
    console.log("ON SUBMIT RESPONSE", response);
    router.push("social-detail");
    setSubmitting(false);
  };

  return (
    <Container className="mt-32">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <Form>
              <div className="flex flex-wrap justify-between">
                <section>
                  <textarea
                    rows={Math.floor(formik.values.title.length / 15) + 1}
                    cols={15}
                    onChange={formik.handleChange}
                    name="title"
                    className="bg-purple py-1 px-3 text-white w-full text-heading outline-0 scrollbar-hidden"
                    defaultValue={initialValues.title}
                  ></textarea>
                  <ErrorMessage name="title" />
                  <div className="mt-8 flex">
                    <CustomDatePicker
                      icon="calendar"
                      name={"date"}
                      placeholder="date"
                      datePickerClassName=" max-w-[12rem] w-44 ml-4"
                    />
                    <CustomDatePicker
                      name="time"
                      className=" ml-4"
                      icon="clock"
                      placeholder="Time"
                      datePickerClassName="max-w-[12rem] w-44 ml-4"
                    />
                  </div>
                  <Field
                    icon="location"
                    className="w-full  mt-8 "
                    name="venue"
                    placeholder="Venue"
                  />
                  <div className="flex justify-between ">
                    <Field
                      icon="people"
                      className="w-[160px] mt-8"
                      type="number"
                      min={1}
                      max={50}
                      name="capacity"
                      placeholder="Max capacity"
                    />
                    <Field
                      icon="cost"
                      className="w-[160px] mt-8"
                      type="number"
                      min={1}
                      max={50}
                      name="price"
                      placeholder="Cost per person"
                    />
                  </div>
                </section>
                <div>
                  <ChooseBanner
                    value={formik.values.banner}
                    onChange={(data) => formik.setFieldValue("banner", data)}
                  />
                  <ErrorMessage name="banner" />
                </div>
                <div className=" w-full desktop:w-[600px]">
                  <div className="min-w-full mt-8 flex flex-col">
                    <label>Description</label>
                    <textarea
                      rows={10}
                      cols={50}
                      onChange={formik.handleChange}
                      name="description"
                      className=" rounded-lg px-3 py-3 outline-none mt-2"
                      placeholder="Description of your event..."
                    ></textarea>
                    <ErrorMessage name="description" />
                  </div>
                  <div className="bg-white mt-8 rounded-lg  p-8  max-w-2xl">
                    <h2 className="text-heading-3 text-purple bg-yellow w-fit py-1 px-3">
                      Settings
                    </h2>
                    <Checkbox
                      className="cursor-pointer mt-4"
                      name="isManualApprove"
                    >
                      I want to approve attendees
                    </Checkbox>
                    <Radio name="privacy" options={PRIVACYS} />
                    <TagPicker
                      title="Tag your social"
                      subTitle="Pick tags for our curation engine to work its magin"
                      className="mt-6"
                      data={SOCIAL_TAGS}
                      onChange={(data) => formik.setFieldValue("tags", data)}
                    />
                    <ErrorMessage name="tags"></ErrorMessage>
                  </div>
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full  my-16"
                  style={
                    formik.isValid && !formik.isSubmitting
                      ? "primary"
                      : "disable"
                  }
                >
                  CREATE SOCIAL
                </Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
};

export default CreateSocialPage;
