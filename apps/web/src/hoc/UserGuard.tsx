"use client";

import { navigate } from "@/libs/server";
import { useAppSelector } from "@/Redux/Hooks";

export default function UserGuard(Components: any) {
  return function IsUser(props: any) {
    const { token, role } = useAppSelector((state) => state.user);
    if (role !== "user") {
      return navigate("/home");
    } else if (!token) {
      return navigate("/");
    }

    return <Components {...props} />;
  };
}
