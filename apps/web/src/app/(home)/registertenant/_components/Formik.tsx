"use client";

import ButtonComp from "@/components/ButtonComp";
import { InputErr } from "@/components/Input";
import { RegisterSchema } from "@/Schemas/Schema";
import { Form, Formik } from "formik";
import React from "react";

const FormikComp = () => {
  return (
    <Formik
      initialValues={{ email: "" }}
      validationSchema={RegisterSchema}
      onSubmit={(value, action) => {
        alert(JSON.stringify(value));
        action.resetForm();
      }}
    >
      {() => {
        return (
          <Form className="flex flex-col">
            <div className="mb-6">
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
            <ButtonComp text="Daftar" />
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormikComp;
