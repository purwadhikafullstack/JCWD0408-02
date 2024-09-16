"use client";

import { navigate } from "@/libs/server";
import { useAppSelector } from "@/Redux/Hooks";

export default function TenantGuard(Components: any) {
  return function IsTenant(props: any) {
    const { token, role } = useAppSelector((state) => state.user);
    if (!token) {
      return navigate("/account/login");
    } else if (token && role !== "tenant") {
      return navigate("/account/login");
    }

    return <Components {...props} />;
  };
}