"use client";
import { Formik, Field, Form } from "formik";
import Subheader from "../components/Subheader";
import { sendContactForm } from "@/utils/api";

import "@/styles/contactForm.css";

const ContactForm = () => {
  return (
    <div>
      <Subheader title="CONTACT" />
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        onSubmit={async (values, { resetForm, setSubmitting }) => {
          try {
            const response = await sendContactForm(values);
            console.log("Contact form sent successfully:", response);

            resetForm();
          } catch (error) {
            console.error("Error sending contact form:", error);
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <label>
              Name
              <Field type="text" name="name" placeholder="Enter Name" />
            </label>
            <label>
              Email
              <Field type="email" name="email" placeholder="Enter Email" />
            </label>
            <label>
              Message
              <Field
                as="textarea"
                name="message"
                placeholder="Enter message e.g: 'I want to hire you!'"
              />
            </label>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
