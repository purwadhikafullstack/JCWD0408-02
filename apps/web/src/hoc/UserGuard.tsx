"use client";

import { navigate } from "@/libs/server";
import { useAppSelector } from "@/Redux/Hooks";

export default function UserGuard(Components: any) {
  return function IsUser(props: any) {
    const { token, role } = useAppSelector((state) => state.user);
    if (!token) {
      return navigate("/account/login");
    } else if (token && role !== "user") {
      return navigate("/dashboard");
    }

    return <Components {...props} />;
  };
}