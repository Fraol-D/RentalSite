const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>RentMaster</h3>
          <p>Simplifying property management for landlords and property managers.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: info@rentmaster.com</p>
          <p>Phone: (555) 123-4567</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 RentMaster. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer 