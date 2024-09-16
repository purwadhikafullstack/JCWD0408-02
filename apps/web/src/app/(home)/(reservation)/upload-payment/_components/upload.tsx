"use client";
import { CiImageOn } from "react-icons/ci";
import UploadFile from "./imageInput";
import { useFormik } from "formik";
import { useState } from "react";
import Image from "next/image";
export default function UploadProof() {
  const [image, setImage] = useState<File | undefined>(undefined);
  const MAX_SIZE = 500000; // 500KB
  const validateImage = (values: { image?: File }) => {
    if (values.image && values.image.size > MAX_SIZE) {
      return { image: "Max file size exceeded." };
    }
  };
  const formik = useFormik<{ image?: File }>({
    initialValues: {}, 
    onSubmit: (values) => setImage(values.image),
    validate: validateImage, 
  });
  return (
    <div className="flex h-max w-full flex-col items-center rounded-xl border-2 bg-white px-3 py-4">
      <div className="flex w-full items-center justify-between">
        <p>Upload bukti pembayaran</p>
        <p className="rounded-full bg-abu px-3 py-1 text-sm font-semibold">
          required
        </p>
      </div>
      <div className="my-2 flex h-full w-full flex-col justify-center rounded-xl border-2 px-4 py-4">
        <CiImageOn
          className={`my-20 self-center ${image ? "hidden" : "block"}`}
        />
        {/* <Image src={image?.name!} alt="bukti" width={100} height={100} /> */}
        <div>
          <UploadFile
            data={formik.values}
            errors={formik.errors}
            setFieldValue={formik.setFieldValue}
          />
          <button
            onClick={() => formik.handleSubmit()}
            disabled={!formik.isValid || (formik.values.image ? false : true)}
            className="mt-2 rounded-md bg-btn px-4 py-1 text-white"
          >
            submit
          </button>
        </div>
      </div>
    </div>
  );
}
