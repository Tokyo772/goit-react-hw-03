import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import styles from "./ContactForm.module.css";

import { useId } from "react";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = ({ onAdd }) => {
  const nameId = useId();
  const numberId = useId();

  const handleSubmit = (values, actions) => {
    const newContact = { ...values, id: nanoid() };
    onAdd(newContact);

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={styles.contactForm}>
        <div className={styles.formGroup}>
          <label htmlFor={nameId} className={styles.formLabel}>
            Name
          </label>
          <Field id={nameId} name="name" className={styles.formControl} />
          <ErrorMessage className={styles.error} name="name" component="span" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor={numberId} className={styles.formLabel}>
            Number
          </label>
          <Field id={numberId} name="number" className={styles.formControl} />
          <ErrorMessage
            className={styles.error}
            name="number"
            component="span"
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
