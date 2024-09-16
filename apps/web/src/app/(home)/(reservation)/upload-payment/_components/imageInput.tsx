"use client";
import { FunctionComponent } from "react";
import { FormikErrors } from "formik";

interface IUploadFile {
  data: { image?: File };
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined,
  ) => Promise<FormikErrors<{ image?: File }>> | Promise<void>;
  errors: FormikErrors<{ image?: File }>;
}

const UploadFile: FunctionComponent<IUploadFile> = ({
  data,
  setFieldValue,
  errors,
}) => {
  return (
    <div>
      <input
        type="file"
        name="image"
        accept="image/png, .jpg"
        onChange={(e) => {
          if (e.currentTarget.files) {
            setFieldValue("image", e.currentTarget.files[0]);
          }
        }}
      />
      {errors.image && (
        <div>
          <br />
          <span id="error">{errors.image}</span>
          <br />
        </div>
      )}
    </div>
  );
};

export default UploadFile;
