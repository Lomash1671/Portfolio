import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',    // Added phone field
    comments: ''  // Renamed from message to comments to match Google Form
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const googleFormUrl = 'https://docs.google.com/forms/d/16Rz8zgoBmi7jqlz2uTml7DdoKYOs3-Zcsz_uIUkOe7M/formResponse';
    
    try {
      const formResponse = await fetch(googleFormUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
          'entry.name': formData.name,     // Replace with actual entry ID
          'entry.email': formData.email,    // Replace with actual entry ID
          'entry.subject': formData.subject,  // Replace with actual entry ID
          'entry.phone': formData.phone,    // Replace with actual entry ID
          'entry.comments': formData.comments  // Replace with actual entry ID
        })
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        phone: '',
        comments: ''
      });
      alert('Message sent successfully!');
    } catch (error) {
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Talk</h3>
            <p>Feel free to reach out for collaborations or just a friendly hello</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <a href="mailto:lomash1671@gmail.com">lomash1671@gmail.com</a>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <a href="tel:+919797691071">+91 9797691071</a>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Channi himmat, Jammu</span>
              </div>
            </div>

            <div className="social-links">
              <a href="https://github.com/Lomash1671" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/lomash-gupta-060668260/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://x.com/LomashG5230" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your Email"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Subject"
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Phone Number"
                pattern="[0-9]{10}"
                title="Please enter a valid 10-digit phone number"
              />
            </div>
            <div className="form-group">
              <textarea
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                required
                placeholder="Comments"
                rows="6"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;