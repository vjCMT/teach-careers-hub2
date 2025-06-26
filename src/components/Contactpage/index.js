import React from "react";
import ContactForm from "../ContactFrom";

const Contactpage = () => {
  return (
    <section className="contact-pg-contact-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col col-lg-6 col-12">
            <div className="section-title-s3 section-title-s5">
              <h2>Our Contacts</h2>
            </div>
            <div className="contact-details">
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classNameical Latin literature
                from 45 BC, making it over 2000 years old.{" "}
              </p>
              <ul>
                <li>
                  <div className="icon">
                    <i className="ti-location-pin"></i>
                  </div>
                  <h5>Our Location</h5>
                  <p>
                    KAVTHA RAILWAY, KAVTHA, TA DEOLI WARDHA, MAHARASHTRA, 442302
                  </p>
                </li>
                <li>
                  <div className="icon">
                    <i className="ti-mobile"></i>
                  </div>
                  <h5>Phone</h5>
                  <p>+919322168327</p>
                </li>
                <li>
                  <div className="icon">
                    <i className="ti-email"></i>
                  </div>
                  <h5>Email</h5>
                  <p>sahilpardakee180@gmail.com</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col col-lg-6 col-12">
            <div className="contact-form-area">
              <div className="section-title-s3 section-title-s5">
                <h2>Quick Contact Form</h2>
              </div>
              <div className="contact-form">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col col-xs-12">
            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3731.406222677683!2d78.374496!3d20.734323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1750843837080!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactpage;
