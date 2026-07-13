import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1acb97] via-[#16a085] to-gray-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Last updated: January 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
          <p className="text-gray-600 mb-4">
            We collect information you provide directly, such as when you contact us, subscribe to our newsletter, or use our services. This may include your name, email address, phone number, and company information.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="text-gray-600 mb-4">
            We use the information we collect to provide and improve our services, communicate with you, send marketing communications (with your consent), and comply with legal obligations.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Information Sharing</h2>
          <p className="text-gray-600 mb-4">
            We do not sell your personal information. We may share your information with trusted service providers who assist us in operating our business, subject to confidentiality agreements.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Data Security</h2>
          <p className="text-gray-600 mb-4">
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Cookies</h2>
          <p className="text-gray-600 mb-4">
            We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Your Rights</h2>
          <p className="text-gray-600 mb-4">
            You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at manager@taskex.in.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Contact Us</h2>
          <p className="text-gray-600 mb-4">
            If you have questions about this Privacy Policy, please contact us at manager@taskex.in or visit our office at JMD Megapolis, Office #246, 2nd Floor, Sohna Road, Sector 48, Gurugram.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
