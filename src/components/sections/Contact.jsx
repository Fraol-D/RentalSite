import { FaFacebookF, FaLinkedinIn, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p><FaEnvelope className="contact-icon" /> info@rentmaster.com</p>
            <p><FaPhone className="contact-icon" /> (555) 123-4567</p>
            <p><FaMapMarkerAlt className="contact-icon" /> 123 Property Street, Real Estate City, 12345</p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <FaTwitter />
              </a>
            </div>
          </div>
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <select>
                <option value="">Select Topic</option>
                <option value="sales">Sales Inquiry</option>
                <option value="support">Technical Support</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact 