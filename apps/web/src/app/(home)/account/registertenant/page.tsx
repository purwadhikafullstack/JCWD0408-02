import DesainLoginRegis from "@/components/DesainLoginRegis";
import React from "react";
import FormikComp from "./_components/Formik";

const RegisterTenant = () => {
  return (
    <div className="bg-latar">
      <DesainLoginRegis
        text1="Daftar"
        text2="Masuk"
        href="/account/logintenant"
        hrefTenant="/account/register"
        ket="Sudah"
        ketTenant="Pembeli"
        ketPembeli="Tenant"
      >
        <FormikComp />
      </DesainLoginRegis>
    </div>
  );
};

export default RegisterTenant;
