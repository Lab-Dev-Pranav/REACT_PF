import React from "react";
import BaseComponent from "../../BaseComponent/BaseComponent";
import "./contact.css";





const sendEmail = async (e) => {
  const formData = new FormData(e.target);
  const fromName = formData.get("fromName");
  const fromEmail = formData.get("fromEmail");
  const fromMsg = formData.get("fromMsg");

  console.log(formData);
  console.log(fromName);
  console.log(fromEmail);
  console.log(fromMsg);

  try {


    if (error) {
      console.error("Failed to send:", error);
      return;
    }
    console.log("Email sent successfully:", data);


  } catch (error) {
    console.error("Error sending email:", error);
  }
};




const Contact = () => {
  return (
    <div className="page-contact">

      <BaseComponent>

        <div className="contact-container">

          {/* HEADER */}
          <div className="contact-header">
            <h1>Get In Touch</h1>

            <p>
              I'd love to hear from you. Let's build something amazing together!
            </p>
          </div>

          {/* GRID */}
          <div className="contact-grid">

            {/* LEFT SIDE */}
            <div className="contact-form">
              <form onSubmit={sendEmail}>



                <div className="form-group">
                  <label>Your Name</label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    name="fromName"
                  />
                </div>

                <div className="form-group">
                  <label>Your Email</label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    name="fromEmail"
                  />
                </div>

                <div className="form-group">
                  <label>Your Message</label>

                  <textarea
                    rows="6"
                    placeholder="Write your message..."
                    name="fromMsg"
                  ></textarea>
                </div>

                <button className="send-btn">
                  Send Message
                </button>

              </form>

            </div>

            {/* RIGHT SIDE */}
            <div className="contact-info">

              <h3>Contact Info</h3>

              <div className="info-item">
                <span>Email:</span>
                <p>pranavpatilg2004@gmail.com</p>
              </div>

              <div className="info-item">
                <span>Phone:</span>
                <p>+91 7058454759</p>
              </div>

              <div className="info-item">
                <span>Location:</span>
                <p>
                  Bhusawal, Maharashtra
                  <br />
                  Pune, Maharashtra
                </p>
              </div>

              <div className="social-section">

                <h3>My Socials</h3>

                <div className="social-links">

                  <a
                    href="https://www.linkedin.com/in/pranav-patil-97b402381?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>

                  <a
                    href="https://github.com/Lab-Dev-Pranav"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>

                  <a
                    href="https://www.instagram.com/_dev.pranav____/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Instagram
                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>

      </BaseComponent>

    </div>
  );
};

export default Contact;