export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 sm:pt-40 sm:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
            Transform Your Business with Our SaaS Solution
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Streamline your workflow, boost productivity, and scale your
            business with our powerful platform.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-indigo-700 transition-colors">
              Start Free Trial
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Powerful Features for Modern Teams
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Real-time Analytics",
                description:
                  "Get instant insights with our powerful analytics dashboard.",
                icon: "📊",
              },
              {
                title: "Team Collaboration",
                description:
                  "Work together seamlessly with built-in collaboration tools.",
                icon: "👥",
              },
              {
                title: "Advanced Security",
                description:
                  "Enterprise-grade security to protect your valuable data.",
                icon: "🔒",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have transformed their
            business with our platform.
          </p>
          <button className="bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-indigo-700 transition-colors">
            Start Your Free Trial
          </button>
        </div>
      </section>
    </div>
  );
}
