import Link from "next/link";

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      description: "Perfect for small teams and startups",
      features: [
        "Up to 5 team members",
        "Basic analytics",
        "24/7 support",
        "1GB storage",
        "API access",
      ],
      cta: "Start with Starter",
      highlighted: false,
    },
    {
      name: "Professional",
      price: "$99",
      description: "Best for growing businesses",
      features: [
        "Up to 20 team members",
        "Advanced analytics",
        "Priority support",
        "10GB storage",
        "API access",
        "Custom integrations",
      ],
      cta: "Go Professional",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "$299",
      description: "For large scale organizations",
      features: [
        "Unlimited team members",
        "Enterprise analytics",
        "Dedicated support",
        "Unlimited storage",
        "Advanced API access",
        "Custom integrations",
        "SLA guarantee",
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Pricing Header */}
      <section className="pt-32 pb-20 sm:pt-40 sm:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Simple, transparent pricing
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Choose the perfect plan for your business. All plans include a
            14-day free trial.
          </p>
        </div>
      </section>

      {/* Pricing Tables */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 ${
                  plan.highlighted
                    ? "bg-indigo-600 text-white ring-4 ring-indigo-600"
                    : "bg-white text-gray-900 border border-gray-200"
                }`}
              >
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span
                    className={`ml-2 ${
                      plan.highlighted ? "text-indigo-100" : "text-gray-500"
                    }`}
                  >
                    /month
                  </span>
                </div>
                <p
                  className={`mb-6 ${
                    plan.highlighted ? "text-indigo-100" : "text-gray-600"
                  }`}
                >
                  {plan.description}
                </p>
                <button
                  className={`w-full py-3 px-6 rounded-full font-medium mb-8 ${
                    plan.highlighted
                      ? "bg-white text-indigo-600 hover:bg-gray-50"
                      : "bg-indigo-600 text-white hover:bg-indigo-700"
                  } transition-colors`}
                >
                  {plan.cta}
                </button>
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg
                        className={`h-5 w-5 mr-3 ${
                          plan.highlighted ? "text-white" : "text-indigo-600"
                        }`}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Can I change my plan later?
              </h3>
              <p className="text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. Changes
                will be reflected in your next billing cycle.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                What happens after my trial ends?
              </h3>
              <p className="text-gray-600">
                After your 14-day trial, you&apos;ll be automatically subscribed
                to your chosen plan unless you cancel.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
