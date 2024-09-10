"use client";

import ButtonComp from "@/components/ButtonComp";
import { Input, InputErr } from "@/components/Input";
import { LoginSchema } from "@/Schemas/Schema";
import { ErrorMessage, Form, Formik } from "formik";
import Link from "next/link";
import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const FormikComp = () => {
  const [hidePass, setHidePass] = useState(false);

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={LoginSchema}
      onSubmit={(value, action) => {
        alert(JSON.stringify(value));
        action.resetForm();
      }}
    >
      {() => {
        return (
          <Form className="flex flex-col">
            <div className="mb-2">
              <label htmlFor="email" className="text-sm text-black">
                E-Mail Address
              </label>
              <InputErr
                id="email"
                name="email"
                type="email"
                className="h-10 w-full rounded-md border border-btn px-3 focus:outline-btn"
                placeholder="Masukkan email"
              />
            </div>
            <div>
              <label htmlFor="password" className="text-sm text-black">
                E-Mail Password
              </label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={hidePass ? "text" : "password"}
                  className="h-10 w-full rounded-md border border-btn px-3 focus:outline-btn"
                  placeholder="Masukkan password"
                />
                <span
                  onClick={() => setHidePass(!hidePass)}
                  className="absolute right-5 top-[32%] cursor-pointer"
                >
                  {hidePass ? <AiFillEye /> : <AiFillEyeInvisible />}
                </span>
              </div>
              <ErrorMessage
                name="password"
                component="div"
                className="text-xs text-red-700"
              />
            </div>
            <Link
              href={"/account/forgot-password-user"}
              className="mb-6 w-fit text-xs text-btn hover:text-btnhover hover:underline"
            >
              Lupa password?
            </Link>

            <ButtonComp text="Masuk" />
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormikComp;
