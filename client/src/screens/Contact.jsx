import React from 'react';
import './Contact.css'

function Contact(props) {
  return (
    <div className="contact-me-container">
      <div className="contact-form-container">
        <form action="/contact" name="contact-form" method="post">
        <input type="hidden" name="contact-form" value="contact-form" />
          <p>
            <label>Your Name: <input type="text" name="name" /></label>
          </p>
          <p>
            <label>Your Email: <input type="email" name="email" /></label>
          </p>
          <p>
            <label>Message: <textarea name="message"></textarea></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
      
    </div>
  );
}

export default Contact;