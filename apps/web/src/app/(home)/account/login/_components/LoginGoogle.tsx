import { supabase } from "@/utils/supabaseClient";
import Image from "next/image";
import React from "react";

const LoginGoogleUser = () => {
  const onLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };

  return (
    <section>
      <button
        onClick={onLogin}
        type="button"
        className="flex w-full justify-center rounded-md border border-btn py-2"
      >
        <Image
          src={"/google.svg"}
          alt="google"
          width={50}
          height={50}
          className="h-8 w-8"
        />
      </button>
    </section>
  );
};

export default LoginGoogleUser;
