import React, { Fragment } from "react";
import { Section } from "../components/Section";

export const Contact = () => {
  return (
    <Section title="Contact me">
      <div className="columns">
        <div className="column col-sm-12 col-6">
          <ContactForm />
        </div>
        <div className="column col-sm-12 col-6">
          Maps here
        </div>
      </div>
    </Section>
  );
};

function ContactForm() {
  return(
    <Fragment>
      <p>
        I am interested in remote work and I can be a utility player in your
        team. For any other queries just let me know by filling this form.
      </p>
      <form className="form-horizontal">
        <div className="columns">
          <div className="column col-xs-12 col-sm-6 col-md-12 col-6">
            <div className="form-group">
              <label className="form-label" htmlFor="input-example-1">
                Name
              </label>
              <input
                className="form-input form-input-large"
                type="text"
                id="input-example-1"
                placeholder="Name"
              />
            </div>
          </div>
          <div className="column col-xs-12 col-sm-6 col-md-12 col-6">
            <div className="form-group">
              <label className="form-label" htmlFor="input-example-1">
                Email
              </label>
              <input
                className="form-input"
                type="text"
                id="input-example-1"
                placeholder="Name"
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="input-example-1">
            Subject
          </label>
          <input
            className="form-input"
            type="text"
            id="input-example-1"
            placeholder="Name"
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="input-example-3">
            Message
          </label>
          <textarea
            className="form-input"
            id="input-example-3"
            placeholder="Textarea"
            rows="3"
          />
        </div>
        <div>
          <button className="btn btn-large btn-primary" type="submit">Send</button>
        </div>
      </form>
    </Fragment>
  );
}
