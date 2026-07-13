import Footer from "@/components/Footer";

export default function TermsOfService() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1acb97] via-[#16a085] to-gray-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Last updated: January 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-600 mb-4">
            By accessing or using Taskex&apos;s website and services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Services</h2>
          <p className="text-gray-600 mb-4">
            Taskex provides business solutions including software development, data analytics, digital marketing, and outsourcing services. Service specifics are outlined in individual project agreements.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Intellectual Property</h2>
          <p className="text-gray-600 mb-4">
            All content on this website, including text, graphics, logos, and software, is the property of Taskex and is protected by intellectual property laws. Custom work delivered to clients is governed by individual project agreements.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Limitation of Liability</h2>
          <p className="text-gray-600 mb-4">
            Taskex shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services, except as outlined in individual service agreements.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Payment Terms</h2>
          <p className="text-gray-600 mb-4">
            Payment terms are specified in individual project proposals and agreements. Late payments may incur additional charges as outlined in the relevant agreement.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Confidentiality</h2>
          <p className="text-gray-600 mb-4">
            Both parties agree to maintain the confidentiality of proprietary information shared during the course of any engagement. Specific terms are outlined in Non-Disclosure Agreements where applicable.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Termination</h2>
          <p className="text-gray-600 mb-4">
            Either party may terminate services as per the terms outlined in individual project agreements. Termination does not relieve either party of obligations accrued prior to termination.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Contact</h2>
          <p className="text-gray-600 mb-4">
            For questions about these Terms, contact us at manager@taskex.in or visit JMD Megapolis, Office #246, 2nd Floor, Sohna Road, Sector 48, Gurugram.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
