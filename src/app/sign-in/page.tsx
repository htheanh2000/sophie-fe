"use client";
import img_3 from "image/3.svg";
import Button from "@/components/button";
import Field from "@/components/form/field";
import Error from "@/components/form/error";
import Icon from "@/components/icon";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Fragment, useEffect } from "react";
import * as Yup from "yup";
import Container from "@/components/container";
import Header from "@/components/header";
import { ISignIn, signin } from "@/store/features/user/user.api";
import { clearUserState } from "@/store/features/user/userSlice";

const SignUpPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { data: user, status, error } = useAppSelector((state) => state.user);
  useEffect(() => {
    dispatch(clearUserState())
  },[dispatch])
  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user, status, router]);

  const initialValues: ISignIn = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const onSubmit = (values: ISignIn, { setSubmitting }: any) => {
    console.log(values);
    setSubmitting(false);
    dispatch(signin(values));
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
                <h1 className="text-center mb-8 tablet:text-left">Sign in</h1>
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
                  loading={status === 'loading'}
                  className="mt-8 w-full mx-auto"
                  style={
                    formik.isValid && !formik.isSubmitting
                      ? "secondary"
                      : "disable"
                  }
                >
                  Sign in
                </Button>
                <Error>{error}</Error>
                <div className="mt-8 flex flex-col justify-center">
                  <p className="text-center">Or sign in with</p>
                  <div className="flex justify-center mt-2">
                    <Icon size="lg" name="google" className="m-2" />
                    <Icon size="lg" name="facebook" className="m-2" />
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </section>
        <section>
          <Image
            className="w-full tablet:max-w-lg mx-4"
            src={img_3}
            alt="right-background"
          />
        </section>
      </Container>
    </Fragment>
  );
};

export default SignUpPage;
