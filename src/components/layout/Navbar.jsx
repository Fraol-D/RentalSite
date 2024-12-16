import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../../styles/components/navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#hero" className="logo">RentMaster</a>
      
      <button className="hamburger" onClick={toggleMenu} aria-label="Toggle Menu">
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <a href="#hero" onClick={closeMenu}>Home</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#features" onClick={closeMenu}>Features</a>
        <a href="#how-it-works" onClick={closeMenu}>How It Works</a>
        <a href="#pricing" onClick={closeMenu}>Pricing</a>
        <a href="#testimonials" onClick={closeMenu}>Testimonials</a>
        <a href="#faq" onClick={closeMenu}>FAQ</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </div>

      <div className={`auth-buttons ${isOpen ? 'active' : ''}`}>
        <a href="/tryout" className="tryout-btn" onClick={closeMenu}>Try It Out</a>
        <button className="login-btn" onClick={closeMenu}>Login</button>
        <button className="signup-btn" onClick={closeMenu}>Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;
