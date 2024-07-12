import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import s from "./ContactForm.module.css";
import * as Yup from "yup";

const ContactForm = ({ onAdd }) => {
  const handleSubmit = (values, { resetForm }) => {
    onAdd({
      name: values.name,
      number: values.number,
      id: nanoid(),
    });
    resetForm();
  };

  const validSchema = Yup.object({
    number: Yup.string()
      .required(`Too Short!`)
      .min(3, `Too Short! `)
      .max(50, `Name must be less than 50 chars`),
    name: Yup.string()
      .required(`Too Short!`)
      .min(3, `Too Short! `)
      .max(50, `Number must be less than 50 chars`),
  });

  return (
    <Formik
      validationSchema={validSchema}
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className={s.form}>
          <h3 className={s.titleForm}>Name</h3>
          <Field className={s.formInput} name="name" type="text" />
          <ErrorMessage className={s.errror} name="name" />
          <h3 className={s.titleForm}>Number</h3>
          <Field className={s.formInput} name="number" type="text" />
          <ErrorMessage className={s.errror} name="number" />
          <button className={s.FormBtn} type="submit">
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
