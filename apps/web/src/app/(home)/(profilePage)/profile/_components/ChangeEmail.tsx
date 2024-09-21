"use client";

import ButtonComp from "@/components/ButtonComp";
import { useAppSelector } from "@/Redux/Hooks";
import { RegisterSchema } from "@/Schemas/Schema";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { BiSolidShieldX } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { HiShieldCheck } from "react-icons/hi";

const ChangeEmailUser = () => {
  const [isActiveEmail, setIsActiveEmail] = useState(false);
  const { email, isVerify } = useAppSelector((state) => state.user);
  const initialValues = {
    email: email,
  };

  return (
    <section className="mt-4 w-full rounded-md border bg-slate-50 shadow-lg">
      <main className="flex justify-between border-b px-6 py-2 md:py-3">
        <p className="font-semibold text-hitam">Email Anda</p>
        <button
          onClick={() => setIsActiveEmail(!isActiveEmail)}
          type="button"
          className="flex cursor-pointer items-center gap-2 rounded-md px-1 py-1 text-sm font-semibold text-hitam hover:bg-btn/10 md:text-base"
        >
          <FiEdit className="h-3 w-3 md:h-4 md:w-4" />
          <p>Ganti email</p>
        </button>
      </main>

      <Formik
        initialValues={initialValues}
        validationSchema={RegisterSchema}
        onSubmit={(value) => {
          alert(JSON.stringify(value));
        }}
      >
        {({ dirty, errors }) => {
          return (
            <Form>
              {isActiveEmail ? (
                <div className="px-6 py-3">
                  <Field
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="w-full rounded-md px-3 text-sm outline-none outline-1 outline-gray-400 focus:outline-2 focus:outline-btn/50 md:py-1 md:text-base"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="mt-1 text-xs text-red-500"
                  />
                </div>
              ) : (
                <main className="px-4 py-2 md:px-6 md:py-3">
                  <div className="flex gap-2 border-b pb-3 text-sm text-gray-600 md:text-base">
                    <p>{email}</p>
                    <div
                      className={`flex items-center gap-1 ${isVerify == true ? "text-green-500" : "text-red-500"} `}
                    >
                      <p>
                        {isVerify == true ? "Verifikasi" : "Belum Verifikasi"}
                      </p>
                      {isVerify == true ? (
                        <HiShieldCheck className="h-5 w-5" />
                      ) : (
                        <BiSolidShieldX className="h-5 w-5" />
                      )}
                    </div>
                  </div>
                </main>
              )}

              <div className="flex justify-end">
                <div className="w-fit px-6 pb-3">
                  <ButtonComp
                    disable={!dirty || !!errors.email}
                    text="Simpan"
                  />
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </section>
  );
};

export default ChangeEmailUser;
