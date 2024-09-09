import React from "react";

const ButtonComp = ({ text, disable }: { text: string; disable?: boolean }) => {
  return (
    <button
      disabled={disable}
      type="submit"
      className="rounded-md bg-btn px-5 py-2 font-semibold text-white transition-all duration-150 hover:bg-btnhover hover:shadow-md disabled:bg-slate-300 disabled:text-gray-100"
    >
      {text}
    </button>
  );
};

export default ButtonComp;
