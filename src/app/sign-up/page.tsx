"use client";
import img_3 from "image/3.svg";
import IM_logo from "image/logo.png";
import Button from "@/components/button";
import Field from "@/components/form/field";
import Icon from "@/components/icon";
import Input from "@/components/input";
import { useAppSelector } from "@/store/hooks";
import { Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";
import * as Yup from "yup";
import Container from "@/components/container";
import Logo from "@/components/logo";
import Header from "@/components/header";

const SignUpPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  //   const { user, status, error } = useAppSelector((state) => state.user);
  //   useEffect(() => {
  //     if (user) {
  //       router.push("/");
  //     }
  //   }, [user]);

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const onSubmit = (values: any, { setSubmitting }: any) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <Fragment>
      <Header />
      <Container className="flex flex-col-reverse desktop:flex-row items-center tablet:mt-24 desktop:items-start justify-between ">
        <section className="w-full max-w-md mb-16">
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {(formik) => (
              <Form className="mt-8">
                <h1 className="text-center mb-8 tablet:text-left">Create an account</h1>
                <Field
                  label="name"
                  placeholder="eg: Huynh The Anh"
                  name="name"
                ></Field>
                <Field
                  label="email"
                  placeholder="eg: theanh@gmail.com"
                  name="email"
                  type="email"
                  className="mt-8"
                ></Field>
                <Field
                  label="password"
                  name="password"
                  type="password"
                  className="mt-8"
                ></Field>

                <Button
                  type="submit"
                  className="mt-8 w-full mx-auto"
                  style={
                    formik.isValid && !formik.isSubmitting
                      ? "secondary"
                      : "disable"
                  }
                >
                  Sign up
                </Button>
                <div className="mt-8 flex flex-col justify-center">
                  <p className="text-center">Or sign up with</p>
                  <div className="flex justify-center mt-2">
                    <Icon size="lg" name="google" className="m-2"/>
                    <Icon size="lg" name="facebook" className="m-2"/>
                  </div>
                </div>

                <div className="text-center mt-8">
                  <p>By sign up, you agree with the</p>
                  <Link href='term-and-condition'><u>Terms of use & Privacy policy</u></Link>
                </div>
              </Form>
            )}
          </Formik>
        </section>
        <section>
          <Image className="w-full tablet:max-w-lg mx-4" src={img_3} alt="right-background" />
        </section>
      </Container>
    </Fragment>
  );
};

export default SignUpPage;
