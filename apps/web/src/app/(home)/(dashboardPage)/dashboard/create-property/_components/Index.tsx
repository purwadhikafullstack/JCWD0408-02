"use client";

import FormikProperty from "./FormikProperty";
import ProgressSteps from "./ProgresStep";
import FormikRoom from "./FormikRoom";
import Createreview from "./Createreview";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/Redux/Hooks";
import { nextStep, prevStep, resetStep } from "@/Redux/slices/stepSlice";
import { MdCreate } from "react-icons/md";
import DesignRoom from "./DesignRoom";

const CreatePropertyPage = () => {
  const dispatch = useDispatch();
  const currentStep = useAppSelector((state) => state.step.currentStep);

  const handleNext = () => {
    dispatch(nextStep());
  };

  const handlePrev = () => {
    dispatch(prevStep());
  };

  const handleReset = () => {
    dispatch(resetStep());
  };

  return (
    <div>
      <div className="flex gap-24 border-b pb-4">
        <div className="flex items-center gap-1">
          <MdCreate className="h-5 w-5" />
          <h1 className="text-xs font-medium md:text-lg">Buat Properti</h1>
        </div>
        <ProgressSteps currentStep={currentStep} />
      </div>

      <main className="mt-4">
        {currentStep == 1 ? (
          <FormikProperty nextButton={handleNext} />
        ) : currentStep == 2 ? (
          <DesignRoom nextButton={handleNext} prevButton={handlePrev} />
        ) : (
          <Createreview nextButton={handleReset} prevButton={handlePrev} />
        )}
      </main>
    </div>
  );
};

export default CreatePropertyPage;
