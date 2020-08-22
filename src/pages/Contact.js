import React, { Fragment } from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";

import { Section } from "../components/Section";

const contactSchema = Yup.object({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  subject: Yup.string().max(75).required(),
  message: Yup.string().required(),
});

export const Contact = () => {
  return (
    <Section title="Contact me">
      <div className="columns">
        <div className="column col-sm-12 col-6">
          <ContactForm />
        </div>
        <div className="column col-sm-12 col-6">Maps here</div>
      </div>
    </Section>
  );
};

function ContactForm() {
  return (
    <Fragment>
      <p>
        I am interested in remote work and I can be a utility player in your
        team. For any other queries just let me know by filling this form.
      </p>
      <Formik
        validationSchema={contactSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setTimeout(() => setSubmitting(false), 2000);
        }}
        initialValues={{}}
      >
        {({
          handleChange,
          handleBlur,
          values,
          errors,
          touched,
          isValid,
          isSubmitting,
        }) => (
          <Form className="form-horizontal" noValidate>
            <div className="columns">
              <div className="column col-xs-12 col-sm-6 col-md-12 col-6">
                <div
                  className={`form-group${
                    touched.name && errors.name ? " has-error" : ""
                  }`}
                >
                  <label className="form-label" htmlFor="input-example-1">
                    Name
                  </label>
                  <input
                    className="form-input form-input-large"
                    type="text"
                    id="name"
                    placeholder="Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
              </div>
              <div className="column col-xs-12 col-sm-6 col-md-12 col-6">
                <div
                  className={`form-group${
                    touched.email && errors.email ? " has-error" : ""
                  }`}
                >
                  <label className="form-label" htmlFor="input-example-1">
                    Email
                  </label>
                  <input
                    className="form-input"
                    type="email"
                    id="email"
                    placeholder="Email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
              </div>
            </div>
            <div
              className={`form-group${
                touched.subject && errors.subject ? " has-error" : ""
              }`}
            >
              <label className="form-label" htmlFor="input-example-1">
                Subject
              </label>
              <input
                className="form-input"
                type="text"
                id="subject"
                placeholder="Subject"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div
              className={`form-group${
                touched.message && errors.message ? " has-error" : ""
              }`}
            >
              <label className="form-label" htmlFor="input-example-3">
                Message
              </label>
              <textarea
                className="form-input"
                id="message"
                placeholder="Textarea"
                rows="3"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div>
              <button
                className={`btn btn-large btn-primary${
                  isSubmitting ? " loading" : ""
                }`}
                type="submit"
                disabled={!isValid || isSubmitting}
              >
                Send
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </Fragment>
  );
}
