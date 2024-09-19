"use client";

import { FC, useState } from "react";
import { FiEdit } from "react-icons/fi";
import CardCreateRoom from "./CardCreateRoom";
import FormikRoom from "./FormikRoom";
import ButtonComp from "@/components/ButtonComp";

interface PropsFormik {
  nextButton: () => void;
  prevButton: () => void;
}

const DesignRoom: FC<PropsFormik> = ({ nextButton, prevButton }) => {
  const [isRoom, setIsRoom] = useState(false);
  const onRoomClick = () => {
    setIsRoom(!isRoom);
  };

  return (
    <div>
      <h1 className="text-lg font-semibold">Tentang room</h1>
      <button
        type="button"
        disabled={isRoom}
        onClick={onRoomClick}
        className="mt-2 flex w-full cursor-pointer items-center justify-end gap-2 font-medium"
      >
        <FiEdit />
        <p>Tambah room</p>
      </button>
      <section className="mb-8 mt-3 rounded-md border px-5 py-3">
        {isRoom ? (
          <FormikRoom
            onRoomClick={onRoomClick}
            nextButton={nextButton}
            prevButton={prevButton}
          />
        ) : (
          <div>
            <div className="mb-5 grid grid-cols-1 place-items-center px-2 py-2">
              <CardCreateRoom />
            </div>
            <div className="flex w-full justify-end">
              <div onClick={nextButton} className="w-fit">
                <ButtonComp text="Selanjutnya" />
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default DesignRoom;
