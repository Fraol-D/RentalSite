import "../../styles/components/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">RentMaster</div>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#features">Features</a>
        <a href="#how-it-works">How It Works</a>
        <a href="#pricing">Pricing</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#faq">FAQ</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="auth-buttons">
        <a href="/tryout" className="tryout-btn">Try It Out</a>
        <button className="login-btn">Login</button>
        <button className="signup-btn">Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;
