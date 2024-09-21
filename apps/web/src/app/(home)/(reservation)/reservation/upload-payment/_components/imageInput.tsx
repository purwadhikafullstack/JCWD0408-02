"use client";
import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import ProofPreview from "./imagePreview";
import { CiImageOn } from "react-icons/ci";
import ButtonComp from "@/components/ButtonComp";

const ImageInput = () => {
  const [selectImage, setSelectImage] = useState<File | null>(null);
  const [isActiveImage, setIsActiveImage] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setIsActiveImage(!false);
    if (file) {
      setSelectImage(file);
    }
  };
  return (
    <div className="">
      {isActiveImage ? (
        <label
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          htmlFor="profile"
          className="relative flex h-40 w-full cursor-pointer items-center justify-center rounded-xl border bg-slate-50 shadow-lg lg:h-[200px] lg:w-full"
        >
          <ProofPreview image={selectImage} />
          {isHover && (
            <div className="absolute top-0 flex h-40 w-full items-center justify-center rounded-xl bg-gray-300/20 transition-opacity duration-300 lg:h-[200px] lg:w-full">
              <FiEdit className="h-5 w-5 text-hitam lg:h-8 lg:w-8" />
              <p className="font-semibold text-hitam">Edit</p>
            </div>
          )}
          <input
            id="profile"
            type="file"
            name="profile"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
      ) : (
        <label
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          htmlFor="profile"
          className="relative flex h-40 w-full cursor-pointer items-center justify-center rounded-xl border-2 border-dotted bg-slate-50 shadow-lg lg:h-[200px] lg:w-[500px]"
        >
          <CiImageOn
            className={`h-14 w-14 text-hitam lg:h-16 lg:w-16 ${isHover ? "opacity-5" : "opacity-100"} transition-opacity duration-300`}
          />

          {isHover && (
            <div className="absolute top-0 flex h-40 w-full items-center justify-center rounded-xl bg-gray-300/20 transition-opacity duration-300 lg:h-[200px] lg:w-[500px]">
              <FiEdit className="h-5 w-5 text-hitam lg:h-8 lg:w-8" />
              <p className="font-semibold text-hitam">Edit</p>
            </div>
          )}
          <input
            id="profile"
            type="file"
            name="profile"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
      )}

      <div className="mt-2 lg:w-fit" onClick={() => alert(selectImage?.name)}>
        <ButtonComp text="Kirim" disable={selectImage ? false : true} />
      </div>
    </div>
  );
};

export default ImageInput;
