import DesainLoginRegis from "@/components/DesainLoginRegis";
import React from "react";
import FormikComp from "./_components/Formik";

const Login = () => {
  return (
    <div className="bg-latar">
      <DesainLoginRegis
        text1="Masuk"
        text2="Daftar"
        href="/registertenant"
        hrefTenant="/register"
        ket="Belum"
        ketTenant="Pembeli"
        ketPembeli="Tenant"
      >
        <FormikComp />
      </DesainLoginRegis>
    </div>
  );
};

export default Login;
