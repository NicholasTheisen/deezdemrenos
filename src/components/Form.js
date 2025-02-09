import "./Form.css";
import React, { useRef } from "react";
import emailjs from 'emailjs-com';

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bpw4t25', 'template_5zcs0ns', form.current, '0MGS9Qx-WtFqA-mKR')
      .then((result) => {
          console.log(result.text);
          alert("Message sent successfully!");
      }, (error) => {
          console.log(error.text);
          alert("Failed to send message, please try again.");
      });

    e.target.reset();
  };

  return (
    <div className="form">
      <form ref={form} onSubmit={sendEmail}>
        <label>Your Name</label>
        <input type="text" name="user_name" placeholder="Your Name" required />
        <label>Your Email</label>
        <input type="email" name="user_email" placeholder="Your Email" required />
        <label>Subject</label>
        <input type="text" name="subject" placeholder="Subject" required />
        <label>Your Message</label>
        <textarea name="message" rows="6" placeholder="Your Message" required></textarea>
        <button className="btn" type="submit">Send</button>
      </form>
    </div>
  );
};

export default Form;