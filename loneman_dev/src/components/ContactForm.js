import React from "react";
import { Formik } from "formik";
import { Inputs, BottomBorder } from "../styled-components/forms";

const ContactForm = (props) => {
  return (
    <Formik
      initialValues={{ email: "", name: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Email required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }

        if (!values.name) {
          errors.name = "Name required";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        console.log(values);
        fetch("https://loneman.dev/.netlify/functions/send-contact-email", {
          method: 'POST',
          mode: 'cors',
         
        })
          .then((response) => response.json())
          .then((data) => console.log(data));
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <Inputs>
            <label>Name and surname</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            <BottomBorder />
          </Inputs>
          <Inputs>
            <label>Email</label>

            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <BottomBorder />
          </Inputs>

          {/* {errors.email && touched.email && errors.email} */}
          {/* {errors.name && touched.name && errors.name} */}
          <Inputs>
            <button className="button" type="submit" disabled={isSubmitting}>
              Request Contact
            </button>
          </Inputs>
        </form>
      )}
    </Formik>
  );
};

export default ContactForm;
