"use client";

import { navigate } from "@/libs/server";
import { useAppSelector } from "@/Redux/Hooks";

export default function TenantGuard(Components: any) {
  return function IsTenant(props: any) {
    const { token, role } = useAppSelector((state) => state.user);
    if (role !== "tenant") {
      return navigate("/home");
    } else if (!token) {
      return navigate("/");
    }

    return <Components {...props} />;
  };
}
