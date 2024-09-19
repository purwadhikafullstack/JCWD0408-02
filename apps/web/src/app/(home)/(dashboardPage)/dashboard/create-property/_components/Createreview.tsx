import { Form, Formik } from "formik";
import { FC } from "react";

interface PropsFormik {
  nextButton: () => void;
  prevButton: () => void;
}

const Createreview: FC<PropsFormik> = ({ nextButton, prevButton }) => {
  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
      {() => {
        return (
          <Form>
            <div className="flex gap-5">
              <button onClick={prevButton}>Prev</button>
              <button onClick={nextButton}>Next</button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Createreview;
