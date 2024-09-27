import React from "react";
import SearchLocation from "./SearchLocation";
import CardPropertyHome from "./CardPropertyHome";
import { getAllProperty } from "@/libs/fetch/property";
import { DataProperty } from "@/types/property";

const ListProperty = async () => {
  const res = await getAllProperty();
  // console.log(res.data.property);
  const data: DataProperty[] = res.data.property;
  console.log(data);

  return (
    <div className="w-full bg-latar/40 py-10">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <SearchLocation />
        <section className="mt-14">
          <h1 className="mb-2 text-2xl font-semibold text-hitam md:text-4xl">
            List Properti
          </h1>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {data.map((item) => {
              return <CardPropertyHome key={item.id} data={item} />;
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ListProperty;
