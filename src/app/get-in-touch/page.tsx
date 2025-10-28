"use client";

import { useState } from 'react';
import Footer from "@/components/Footer";

export default function GetInTouch() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: '',
            email: '',
            phoneNumber: '',
            message: ''
          });
        }, 3000);
      } else {
        const errorData = await response.json();
        console.error('Failed to send email:', errorData);
        alert(`Failed to send message: ${errorData.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send message. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1acb97] via-[#16a085] to-gray-900 min-h-[80vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Contact Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Get in Touch
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your business? Let&apos;s discuss how our comprehensive solutions 
              can help you achieve your goals. We&apos;re here to help you succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Side - Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                  Let&apos;s Start a <span className="text-[#1acb97]">Conversation</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Whether you need software development, data analytics, payroll services, 
                  or digital marketing solutions, we&apos;re ready to help you succeed.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-8">
                <div className="flex items-start space-x-4 pb-6 border-b border-gray-200">
                  <div className="w-12 h-12 bg-gradient-to-tr from-[#1acb97] to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Email Us</h3>
                    <p className="text-gray-600">manager@taskex.in</p>
                    <p className="text-gray-600">support@taskex.in</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 pb-6 border-b border-gray-200">
                  <div className="w-12 h-12 bg-gradient-to-tr from-[#1acb97] to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Call Us</h3>
                    <p className="text-gray-600">+91 92127 15691</p>
                    <p className="text-gray-600">Mon-Fri 9AM-6PM IST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-tr from-[#1acb97] to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Visit Us</h3>
                    <p className="text-gray-600">JMD Megapolis, Office #246, 2nd Floor</p>
                    <p className="text-gray-600">Sohna Road, Sector 48, Gurugram</p>
                  </div>
                </div>
              </div>

              {/* Services List */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Services</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#1acb97] rounded-full"></div>
                    <span className="text-gray-600">Software Development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#1acb97] rounded-full"></div>
                    <span className="text-gray-600">Data Analytics</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#1acb97] rounded-full"></div>
                    <span className="text-gray-600">HR & Payroll</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#1acb97] rounded-full"></div>
                    <span className="text-gray-600">Digital Marketing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#1acb97] rounded-full"></div>
                    <span className="text-gray-600">Business Process</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#1acb97] rounded-full"></div>
                    <span className="text-gray-600">Technology Consulting</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 border border-gray-100">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1acb97] focus:border-transparent transition-colors placeholder-gray-500 placeholder-opacity-70 text-gray-900"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1acb97] focus:border-transparent transition-colors placeholder-gray-500 placeholder-opacity-70 text-gray-900"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="phoneNumber" className="block text-sm font-bold text-gray-900 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1acb97] focus:border-transparent transition-colors placeholder-gray-500 placeholder-opacity-70 text-gray-900"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-gray-900 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1acb97] focus:border-transparent transition-colors resize-none placeholder-gray-500 placeholder-opacity-70 text-gray-900"
                      placeholder="Tell us about your project or requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#1acb97] text-white font-bold py-4 px-6 rounded-lg hover:bg-emerald-600 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-[#1acb97] rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent!</h3>
                  <p className="text-gray-600">
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1acb97] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of businesses that trust us with their growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#1acb97] font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Schedule a Call
            </button>
            <button className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-[#1acb97] transition-all duration-300">
              View Our Work
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
