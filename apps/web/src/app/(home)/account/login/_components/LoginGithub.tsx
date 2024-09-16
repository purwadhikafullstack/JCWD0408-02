import { supabase } from "@/utils/supabaseClient";
import { FaGithub } from "react-icons/fa";

const LoginGithubUser = () => {
  const onLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
    });
  };
  return (
    <section>
      <button
        onClick={onLogin}
        type="button"
        className="flex w-full justify-center rounded-md border border-btn py-2"
      >
        <FaGithub className="h-8 w-8 text-black" />
      </button>
    </section>
  );
};

export default LoginGithubUser;
