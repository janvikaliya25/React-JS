// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
// import "./Contact.css";

// export default function Contact() {
//   return (
//     <div className="container-fluid bg-dark text-white py-5" style={{marginTop:"62px"}}>
//       <div className="text-center">
//         <h2 className="mb-4">Get in Touch</h2>
//         <p className="">Feel free to reach out for any collaboration or inquiries.</p>
//       </div>

//       <div className="container mt-5">
//         <div className="row justify-content-between">
//           {/* Contact Information */}
//           <div className="col-md-5 text-center mb-4">
//             <div className="contact-info p-4 rounded shadow-lg">
//               <h4>Contact Info</h4>
//               <p><FaEnvelope className="contact-icon" /> Email: janvikaliya@gmail.com</p>
//               <p><FaPhone className="contact-icon" /> Phone: +91 9737 ** ****</p>
//               <p><FaMapMarkerAlt className="contact-icon" /> Location: Kalawad Road Rajkot, Gujarat, India</p>
//               {/* Social Media Links */}
//               <div className="social-icons mt-3">
//                 <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
//                 <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
//                 <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
//               </div>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div className="col-md-6">
//             <div className="contact-form p-4 rounded shadow-lg">
//               <h4>Send a Message</h4>
//               <form>
//                 <div className="mb-3">
//                   <label className="form-label">Name</label>
//                   <input type="text" className="form-control" placeholder="Your Name" required />
//                 </div>
//                 <div className="mb-3">
//                   <label className="form-label">Email</label>
//                   <input type="email" className="form-control" placeholder="Your Email" required />
//                 </div>
//                 <div className="mb-3">
//                   <label className="form-label">Message</label>
//                   <textarea className="form-control" rows="4" placeholder="Your Message" required></textarea>
//                 </div>
//                 <button type="submit" className="btn btn-info w-100">Send Message</button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "your_service_id",     // Replace with your EmailJS service ID
      "your_template_id",    // Replace with your EmailJS template ID
      form.current,
      "your_public_key"      // Replace with your EmailJS public key
    )
    .then(
      (result) => {
        console.log("Email sent successfully:", result.text);
        setStatusMessage("Message sent successfully! ✅");
        form.current.reset();  // Reset the form after submission
      },
      (error) => {
        console.log("Error sending email:", error.text);
        setStatusMessage("Failed to send message. ❌");
      }
    );
  };

  return (
    <div className="container-fluid bg-dark text-white py-5 mt-5 contact-container">
      <div className="text-center">
        <h2 className="mb-4">Get in Touch</h2>
        <p className="text-muted">Feel free to reach out for any collaboration or inquiries.</p>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          {/* Contact Information */}
          <div className="col-md-5 text-center mb-4">
            <div className="contact-info p-4 rounded shadow-lg">
              <h4>Contact Info</h4>
              <p><FaEnvelope className="contact-icon" /> Email: janvikaliya@gmail.com</p>
              <p><FaPhone className="contact-icon" /> Phone: +91 9737 ** ****</p>
              <p><FaMapMarkerAlt className="contact-icon" /> Location: Kalawad Road Rajkot, Gujarat, India</p>
              {/* Social Media Links */}
              <div className="social-icons mt-3">
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-md-6">
            <div className="contact-form p-4 rounded shadow-lg">
              <h4>Send a Message</h4>
              <form ref={form} onSubmit={sendEmail}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input type="text" name="user_name" className="form-control" placeholder="Your Name" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" name="user_email" className="form-control" placeholder="Your Email" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea name="message" className="form-control" rows="4" placeholder="Your Message" required></textarea>
                </div>
                <button type="submit" className="btn btn-info w-100">Send Message</button>
              </form>
              {statusMessage && <p className="mt-3 text-center">{statusMessage}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
