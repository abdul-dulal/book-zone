"use client";
import Banner from "@/components/shere/Banner";
import { Field, Form, Formik } from "formik";
import { AiOutlineMail, AiOutlineEye, AiOutlineUser } from "react-icons/ai";
import React, { useState } from "react";
import { validationSchema } from "@/components/lib/Valided";
import Link from "next/link";
const initialValues = {
  user_name: "",
  email: "",
  password: "",
};
const Register = () => {
  const [show, setShow] = useState(false);
  const onSubmit = (values) => {
    const { email, password } = values;
    console.log(email, password);
  };
  return (
    <div className="">
      <Banner />
      <div className="">
        <div className="w-full flex items-center justify-center mt-3 ">
          <div className="bg-white shadow-lg p-5">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="flex relative">
                    <Field
                      name="user_name"
                      type="text"
                      placeholder="Name"
                      className="border-2 border-gray-400 lg:w-[520px]  w-80  h-12 px-3  my-2 text-lg  placeholder:text-[#035269] bg-white rounded-md focus:ring  focus:outline-none"
                    />
                    <AiOutlineUser className="text-black absolute right-3 mt-4 text-2xl" />
                  </div>
                  <span className="text-red-700">
                    {errors.user_name && touched.user_name && (
                      <div>{errors.user_name}</div>
                    )}
                  </span>
                  <div className="flex relative">
                    <Field
                      name="email"
                      type="email"
                      placeholder="Email"
                      className="border-2 border-gray-400 lg:w-[520px]  w-80  h-12 px-3  my-2 text-lg  placeholder:text-[#035269] bg-white rounded-md focus:ring  focus:outline-none"
                    />
                    <AiOutlineMail className="text-black absolute right-3 mt-5 text-2xl" />
                  </div>
                  <span className="text-red-700">
                    {errors.email && touched.email && <div>{errors.email}</div>}
                  </span>
                  <div className="flex relative">
                    <Field
                      name="password"
                      type={`${show ? "text" : "password"}`}
                      placeholder=" Password"
                      className="border-2 border-gray-400 lg:w-[520px]  w-80  h-12 px-3  my-2 text-lg  placeholder:text-[#035269] bg-white rounded-md focus:ring focus:outline-none "
                    />
                    <AiOutlineEye
                      onClick={() => setShow(!show)}
                      className="text-black absolute right-3 mt-5 text-2xl cursor-pointer"
                    />
                  </div>
                  <span className="text-red-700">
                    {errors.password && touched.password && (
                      <div>{errors.password}</div>
                    )}
                  </span>
                  <p>
                    You have already an account
                    <Link href="/signin" className="text-primary">
                      Login
                    </Link>
                  </p>
                  <div className="flex justify-between my-3">
                    <button
                      type="submit"
                      className={`lg:w-20 w-80 h-12 bg-primary text-white rounded-md  `}
                    >
                      Submit
                    </button>
                    <p>Lost your passworld?</p>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
