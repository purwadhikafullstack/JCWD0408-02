import React from "react";

const ButtonComp = ({ text, disable }: { text: string; disable?: boolean }) => {
  return (
    <button
      disabled={disable}
      type="submit"
      className="w-full rounded-md bg-btn px-3 py-2 text-sm font-semibold text-white transition-all duration-150 hover:bg-btnhover hover:shadow-md disabled:bg-slate-300 disabled:text-gray-100 disabled:shadow-none md:text-base lg:px-5"
    >
      {text}
    </button>
  );
};

export default ButtonComp;
