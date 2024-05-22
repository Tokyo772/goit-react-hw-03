import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";

import { useId } from "react";

const FeedbackSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const initialValues = {
  username: "",
  number: "",
};

const ContactForm = ({ onAdd }) => {
  const nameId = useId();
  const numberId = useId();

  const handleSubmit = (values, actions) => {
    onAdd(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form>
        <label htmlFor={nameId}>Name</label>
        <Field id={nameId} type="text" name="username" />
        <label htmlFor={numberId}>Number</label>
        <Field id={numberId} type="number" name="number" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
