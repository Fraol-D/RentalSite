import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I get started with RentMaster?",
      answer: "Getting started is easy! Simply sign up for an account, and our setup wizard will guide you through adding your properties and tenants. Our support team is always available to help you with the onboarding process."
    },
    {
      question: "What payment methods do you support?",
      answer: "We support all major payment methods including bank transfers, credit cards, and mobile money. We also integrate with popular payment platforms to ensure maximum flexibility for both landlords and tenants."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely! We use bank-level encryption and security measures to protect your data. All information is stored in secure cloud servers with regular backups to ensure your data is always safe and accessible."
    },
    {
      question: "Can I manage multiple properties?",
      answer: "Yes! RentMaster is designed to handle multiple properties efficiently. You can manage different properties, units, and tenants all from one central dashboard."
    },
    {
      question: "Do you offer customer support?",
      answer: "Yes, we provide comprehensive customer support through multiple channels including phone, email, and chat. Our support team is available during business hours to assist you with any questions or issues."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq">
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-accordion">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
              onClick={() => toggleAccordion(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 