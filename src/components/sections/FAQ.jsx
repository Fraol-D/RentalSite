const FAQ = () => {
  const faqs = [
    {
      question: "How do I get started with RentMaster?",
      answer: "Simply click the 'Sign Up' button, create your account, and follow our easy setup wizard to add your properties."
    },
    {
      question: "What payment methods do you support?",
      answer: "We support all major credit cards, bank transfers, and popular payment platforms like PayPal and Stripe."
    },
    {
      question: "Is my data secure?",
      answer: "Yes, we use bank-level encryption and security measures to protect all your data and transactions."
    },
    {
      question: "Can I migrate from another platform?",
      answer: "Yes, our team will help you migrate your data from other platforms seamlessly."
    }
  ]

  return (
    <section id="faq" className="faq">
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ 