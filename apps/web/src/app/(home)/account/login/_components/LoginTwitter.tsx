import { supabase } from "@/utils/supabaseClient";
import React from "react";
import { BsTwitterX } from "react-icons/bs";

const LoginTwitterUser = () => {
  const onLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "twitter",
    });
  };
  return (
    <section>
      <button
        onClick={onLogin}
        type="button"
        className="flex w-full justify-center rounded-md border border-btn py-2"
      >
        <BsTwitterX className="h-8 w-8" />
      </button>
    </section>
  );
};

export default LoginTwitterUser;
