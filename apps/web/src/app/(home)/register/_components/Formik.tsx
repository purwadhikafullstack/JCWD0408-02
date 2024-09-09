"use client";

import ButtonComp from "@/components/ButtonComp";
import { InputErr } from "@/components/Input";
import { registerAxios } from "@/libs/fetch/registerUser";
import { navigate } from "@/libs/server";
import { RegisterSchema } from "@/Schemas/Schema";
import { UserType } from "@/types/user";
import { AxiosError } from "axios";
import { Form, Formik } from "formik";
import React, { useState } from "react";

const FormikComp = () => {
  const [loading, setLoading] = useState(false);
  const onLogin = async (data: UserType) => {
    setLoading(true);
    try {
      const res = await registerAxios(data);
      alert(res.data.msg);
      navigate("/login");
      setLoading(false);
    } catch (err: any) {
      if (err instanceof AxiosError) {
        alert(err.response?.data);
      }
    } finally {
      setLoading(false);
    }
  };

  const initialValues: UserType = {
    email: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={RegisterSchema}
      onSubmit={(value, action) => {
        onLogin(value);
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
            <ButtonComp
              disable={loading}
              text={loading ? "Loading..." : "Daftar"}
            />
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormikComp;
