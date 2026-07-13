"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer";

const blogs = [
  {
    title: "The Future of Business Process Outsourcing in 2025",
    excerpt: "Explore the emerging trends in BPO and how businesses can leverage outsourcing for growth.",
    date: "January 15, 2025",
    category: "Business",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "How Data Analytics is Transforming Decision Making",
    excerpt: "Learn how modern businesses are using data-driven insights to make smarter decisions.",
    date: "January 10, 2025",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Building Scalable SaaS Applications: Best Practices",
    excerpt: "A comprehensive guide to architecting SaaS platforms that grow with your business.",
    date: "January 5, 2025",
    category: "Development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Digital Marketing Strategies for B2B Companies",
    excerpt: "Effective digital marketing tactics that drive results in the B2B space.",
    date: "December 28, 2024",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Why Every Business Needs a Digital Transformation Strategy",
    excerpt: "Digital transformation is no longer optional. Here's how to get started.",
    date: "December 20, 2024",
    category: "Strategy",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "The Rise of AI in Business Operations",
    excerpt: "How artificial intelligence is reshaping business processes and creating new opportunities.",
    date: "December 15, 2024",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Blogs() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#1acb97] via-[#16a085] to-gray-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            Insights, trends, and expert perspectives from the Taskex team
          </motion.p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-[#1acb97] bg-[#1acb97]/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm">{post.excerpt}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
