import React from "react";
import './Contact.css'

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
    <div className="contact-me-container">
      <form
        className="contact-form"
        onSubmit={this.submitForm}
        action="https://formspree.io/f/mrgoyykw"
        method="POST"
      >
        <label className="form-label">Email:</label>
        <input type="email" name="email" />
        <label className="form-label">Message:</label>
        <textarea type="text" name="message" className="message"></textarea>
        {status === "SUCCESS" ? <p className="form-label">Thanks!</p> : <button className="submit-button">Submit</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
        </form>
      </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}



// import React from 'react';
// import './Contact.css'

// function Contact(props) {
//   return (
//     <div className="contact-me-container">
//       <div className="contact-form-container">
        
//       </div>
      
//     </div>
//   );
// }

// export default Contact;
