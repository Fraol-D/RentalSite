const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$29',
      features: [
        'Up to 5 properties',
        'Basic reporting',
        'Email support',
        'Payment tracking'
      ]
    },
    {
      name: 'Growth',
      price: '$79',
      features: [
        'Up to 20 properties',
        'Advanced analytics',
        'Priority support',
        'Maintenance tracking'
      ]
    },
    {
      name: 'Pro',
      price: '$149',
      features: [
        'Unlimited properties',
        'Custom reporting',
        '24/7 support',
        'Full feature access'
      ]
    }
  ]

  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <h2>Pricing Plans</h2>
        <p className="section-description">Choose the perfect plan for your needs</p>
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className="pricing-card">
              <h3>{plan.name}</h3>
              <div className="price">
                <span className="amount">{plan.price}</span>
                <span className="period">/month</span>
              </div>
              <ul className="features-list">
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <button className="select-plan">Get Started</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing 