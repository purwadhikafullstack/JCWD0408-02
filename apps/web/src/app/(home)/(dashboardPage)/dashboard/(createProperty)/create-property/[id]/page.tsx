"use client";

import { FC, useState } from "react";
import { FiEdit } from "react-icons/fi";
import FormikRoom from "../_components/FormikRoom";
import ListCardRoom from "../_components/ListCardRoom";

interface PropsFormik {
  nextButton: () => void;
  prevButton: () => void;
  params?: { id: string };
}

const DesignRoom: FC<PropsFormik> = ({
  nextButton,
  prevButton,
  params,
}) => {
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
            id={params!.id}
          />
        ) : (
          <div>
            <ListCardRoom id={params?.id!} />
          </div>
        )}
      </section>
    </div>
  );
};

export default DesignRoom;
