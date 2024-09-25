import React from "react";
import FormikPropertyEdit from "./_components/FormikProperty";
import FormikEditRoom from "./_components/FormikEditRoom";

const PropertyEdit = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <h1 className="text-xl font-semibold text-hitam lg:text-2xl">
        Data Property
      </h1>
      <h4 className="text-sm font-light text-gray-500">
        Edit informasi dan aktivitas tentang properti anda
      </h4>
      <FormikPropertyEdit id={params.id} />
      <h1 className="text-xl font-semibold text-hitam lg:text-2xl">
        Data Rooms
      </h1>
      <h4 className="text-sm font-light text-gray-500">
        Edit informasi dan aktivitas tentang room anda
      </h4>
      <FormikEditRoom />
    </div>
  );
};

export default PropertyEdit;
