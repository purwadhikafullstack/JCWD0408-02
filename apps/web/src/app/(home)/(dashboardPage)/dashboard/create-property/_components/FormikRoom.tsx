"use client";

import { ErrorMessage, Field, Form, Formik } from "formik";
import { FC, useState } from "react";
import { RoomForm } from "@/types/property";
import { FormRoom } from "@/Schemas/Schema";
import {
  MdMergeType,
  MdOutlineBedroomChild,
  MdOutlineBedroomParent,
  MdOutlineDescription,
  MdOutlineFreeBreakfast,
  MdOutlineShower,
} from "react-icons/md";
import { FaMinus, FaPlus, FaRestroom, FaWifi } from "react-icons/fa6";
import { RiHotelLine } from "react-icons/ri";
import { IoPricetagsOutline } from "react-icons/io5";
import ButtonComp from "@/components/ButtonComp";

interface PropsFormik {
  nextButton: () => void;
  prevButton: () => void;
  onRoomClick: () => void;
}

const FormikRoom: FC<PropsFormik> = ({
  nextButton,
  prevButton,
  onRoomClick,
}) => {
  const [loading, setLoading] = useState(false);
  const initialValues: RoomForm = {
    type: "",
    price: "",
    pricediscount: "",
    capacity: 1,
    description: "",
    facility: "",
  };

  const onSumbitRoom = () => {
    setLoading(true);
    try {
    } catch (error) {
      onRoomClick();
    } finally {
      setLoading(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={FormRoom}
      onSubmit={(value) => {
        alert(JSON.stringify(value));
        onRoomClick();
      }}
    >
      {({ values, setFieldValue, errors, dirty }) => {
        const handleIncrement = () => {
          if (values.capacity < 5) {
            setFieldValue("capacity", values.capacity + 1);
          }
        };

        const handleDecrement = () => {
          if (values.capacity > 1) {
            setFieldValue("capacity", values.capacity - 1);
          }
        };
        return (
          <Form>
            <section className="mb-8 flex text-hitam">
              {/* Type start */}
              <main className="w-1/2">
                <h1 className="flex items-center gap-2 font-medium text-gray-500">
                  <MdMergeType className="h-5 w-5" />
                  <main>
                    Type Room<span className="text-red-500">*</span>
                  </main>
                </h1>
                <section className="mt-3 flex cursor-pointer gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="category"
                      id="type-standard"
                      value="Standard"
                      checked={values.type === "Standard"}
                      onChange={() => setFieldValue("type", "Standard")}
                    />
                    <label htmlFor="type-standard" className="cursor-pointer">
                      Standard
                    </label>
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="category"
                      id="type-deluxe"
                      value="Deluxe"
                      checked={values.type === "Deluxe"}
                      onChange={() => setFieldValue("type", "Deluxe")}
                    />
                    <label htmlFor="type-deluxe" className="cursor-pointer">
                      Deluxe
                    </label>
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="category"
                      id="type-suite"
                      value="Suite"
                      checked={values.type === "Suite"}
                      onChange={() => setFieldValue("type", "Suite")}
                    />
                    <label htmlFor="type-suite" className="cursor-pointer">
                      Suite
                    </label>
                  </div>
                  <ErrorMessage
                    name="type"
                    component={"div"}
                    className="text-sm text-red-700"
                  />
                </section>
              </main>

              {/* Facilitas start */}
              <main className="w-1/2">
                <h1 className="flex items-center gap-2 font-medium text-gray-500">
                  <RiHotelLine />
                  <main>
                    Facilitas Room<span className="text-red-500">*</span>
                  </main>
                </h1>
                <main className="flex flex-wrap gap-5">
                  {/* Wifi */}
                  <section className="mt-3">
                    <div className="flex items-center gap-1">
                      <input
                        type="checkbox"
                        name="category"
                        id="facility-suite"
                        value="Wifi"
                        onChange={() => setFieldValue("facility", "Wifi")}
                      />
                      <label
                        htmlFor="facility-suite"
                        className="flex cursor-pointer items-center gap-2 text-sm"
                      >
                        <FaWifi />
                        <p>Wifi</p>
                      </label>
                    </div>
                  </section>
                  {/* Double bed */}
                  <section className="mt-3">
                    <div className="flex items-center gap-1">
                      <input
                        type="checkbox"
                        name="category"
                        id="facility-doublebed"
                        value="Doublebed"
                        onChange={() => setFieldValue("facility", "Doublebed")}
                      />
                      <label
                        htmlFor="facility-doublebed"
                        className="flex cursor-pointer items-center gap-2 text-sm"
                      >
                        <MdOutlineBedroomParent />
                        <p>Double bed</p>
                      </label>
                    </div>
                  </section>
                  {/* Single bed */}
                  <section className="md:mt-3">
                    <div className="flex items-center gap-1">
                      <input
                        type="checkbox"
                        name="category"
                        id="facility-singlebed"
                        value="Singlebed"
                        onChange={() => setFieldValue("facility", "Singlebed")}
                      />
                      <label
                        htmlFor="facility-singlebed"
                        className="flex cursor-pointer items-center gap-2 text-sm"
                      >
                        <MdOutlineBedroomChild />
                        <p>Single bed</p>
                      </label>
                    </div>
                  </section>
                  {/* Breakfast */}
                  <section className="md:mt-3">
                    <div className="flex items-center gap-1">
                      <input
                        type="checkbox"
                        name="category"
                        id="facility-breakfast"
                        value="Breakfast"
                        onChange={() => setFieldValue("facility", "Breakfast")}
                      />
                      <label
                        htmlFor="facility-breakfast"
                        className="flex cursor-pointer items-center gap-2 text-sm"
                      >
                        <MdOutlineFreeBreakfast />
                        <p>Breakfast</p>
                      </label>
                    </div>
                  </section>
                  {/* Shower */}
                  <section>
                    <div className="flex items-center gap-1">
                      <input
                        type="checkbox"
                        name="category"
                        id="facility-shower"
                        value="Shower"
                        onChange={() => setFieldValue("facility", "Shower")}
                      />
                      <label
                        htmlFor="facility-shower"
                        className="flex cursor-pointer items-center gap-2 text-sm"
                      >
                        <MdOutlineShower />
                        <p>Shower</p>
                      </label>
                    </div>
                  </section>
                  <ErrorMessage
                    name="facility"
                    component={"div"}
                    className="text-sm text-red-700"
                  />
                </main>
              </main>
            </section>

            {/* Price room */}
            <section className="text-hitam">
              <main className="mb-8 flex flex-col gap-5 md:flex-row md:items-center">
                <div className="w-1/2">
                  <h1 className="flex items-center gap-2 font-medium text-gray-500">
                    <IoPricetagsOutline />
                    <main>
                      Normal Price Room<span className="text-red-500">*</span>
                    </main>
                  </h1>
                  <Field
                    name="price"
                    placeholder="Masukkan harga room"
                    className="mt-1 w-full rounded-md border bg-transparent px-3 py-2 focus:outline-btn"
                    inputMode="numeric"
                    onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                      e.target.value = e.target.value.replace(/\D/g, "");
                    }}
                  />
                  <ErrorMessage
                    name="facility"
                    component={"div"}
                    className="text-sm text-red-700"
                  />
                </div>
                <div className="w-1/2">
                  <div>
                    <h1 className="flex items-center gap-2 font-medium text-gray-500">
                      <IoPricetagsOutline />
                      <main>
                        Discount Price Room
                        <span className="text-red-500">*</span>
                      </main>
                    </h1>
                    <Field
                      name="pricediscount"
                      placeholder="Masukkan harga room"
                      className="mt-1 w-full rounded-md border bg-transparent px-3 py-2 focus:outline-btn"
                      inputMode="numeric"
                      onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                        e.target.value = e.target.value.replace(/\D/g, "");
                      }}
                    />
                    <ErrorMessage
                      name="facility"
                      component={"div"}
                      className="text-sm text-red-700"
                    />
                  </div>
                </div>
              </main>

              {/* Kapasitas room */}
              <main className="mb-8">
                <h1 className="flex items-center gap-2 font-medium text-gray-500">
                  <FaRestroom />
                  <main>
                    Capacity Room<span className="text-red-500">*</span>
                  </main>
                </h1>
                <div className="mt-3 flex h-10 w-fit gap-3 rounded-md border">
                  <button
                    onClick={handleDecrement}
                    type="button"
                    className="border-r p-2"
                  >
                    <FaMinus className="h-5 w-5" />
                  </button>
                  <input
                    type="text"
                    value={values.capacity}
                    name="capacity"
                    className="w-8 bg-transparent text-center"
                  />
                  <button
                    onClick={handleIncrement}
                    type="button"
                    className="border-l p-2"
                  >
                    <FaPlus className="h-5 w-5" />
                  </button>
                </div>
              </main>

              {/* Deskripsi */}
              <main>
                <h1 className="flex items-center gap-2 font-medium text-gray-500">
                  <MdOutlineDescription />
                  <main>
                    Deskripsi Room<span className="text-red-500">*</span>
                  </main>
                </h1>
                <textarea
                  name="description"
                  id="description"
                  value={values.description}
                  placeholder="Masukkan deskripsi unit anda"
                  className="min-h-52 w-full rounded-md border bg-transparent px-3 py-2 focus:outline-btn"
                  onChange={(e) => setFieldValue("description", e.target.value)}
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="text-sm text-red-700"
                />
              </main>
            </section>

            <div className="my-5">
              <ButtonComp
                disable={
                  !dirty ||
                  !!errors.capacity ||
                  !!errors.description ||
                  !!errors.facility ||
                  !!errors.price ||
                  !!errors.pricediscount ||
                  !!errors.type
                }
                text="Buat"
              />
            </div>

            {/* <div className="flex gap-5">
              <button onClick={prevButton}>Prev</button>
              <button onClick={nextButton}>Next</button>
            </div> */}
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormikRoom;
