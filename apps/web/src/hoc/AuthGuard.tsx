"use client";

import { navigate } from "@/libs/server";
import { useAppSelector } from "@/Redux/Hooks";
import React from "react";

export default function AuthGuard(Components: any) {
  return function IsAuth(props: any) {
    const { token, role } = useAppSelector((state) => state.user);
    if (!token) {
      return navigate("/");
    } else if (role !== "user") {
      return navigate("/dashboard");
    }

    return <Components {...props} />;
  };
}
