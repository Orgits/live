"use client";
import React from "react";
import { toast } from "react-toastify";

const ContactForm = () => {
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "8405ef09-25b7-4594-a12d-3921d401c6c3");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Thank you for reaching out! We’ll get back to you shortly.");
        event.target.reset(); // Reset the form only on success
      } else {
        toast.error("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error submitting the form. Please check your connection.");
    }
  }

  return (
    <>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-lg-12">
            <div className="form-group">
              <input
                className="form-control"
                id="name"
                name="name"
                placeholder="Name"
                type="text"
                autoComplete="off"
                required
              />
              <span className="alert-error"></span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <input
                className="form-control"
                id="email"
                name="email"
                placeholder="Email*"
                type="email"
                autoComplete="off"
                required
              />
              <span className="alert-error"></span>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <input
                className="form-control"
                id="phone"
                name="phone"
                placeholder="Phone"
                type="text"
                autoComplete="off"
                required
              />
              <span className="alert-error"></span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="form-group comments">
              <textarea
                className="form-control"
                id="comments"
                name="comments"
                placeholder="How Can We Help You"
                autoComplete="off"
                required
              ></textarea>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <button type="submit" name="submit" id="submit">
              <i className="fa fa-paper-plane"></i> Get in Touch
            </button>
          </div>
        </div>
        <div className="col-lg-12 alert-notification">
          <div id="message" className="alert-msg"></div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;