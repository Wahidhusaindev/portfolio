import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { sendEmail } from "../../utils/emailjs";

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    try {
      await sendEmail(formRef);
      setStatus("Message sent successfully!");
      formRef.current.reset();
    } catch (error) {
      setStatus("Failed to send message. Please try again later.");
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600">
            Let's work together on your next project
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Contact Info
            </h3>
            <div className="space-y-4">
              {[
                {
                  icon: "📧",
                  title: "Email",
                  value: "wahidhusaindev@gmail.com",
                  color: "bg-blue-100 text-blue-600",
                },
                {
                  icon: "📱",
                  title: "Phone",
                  value: "+91 7900288140",
                  color: "bg-green-100 text-green-600",
                },
                {
                  icon: "🌐",
                  title: "LinkedIn",
                  value: "linkedin.com/in/wahidhusaindev",
                  color: "bg-purple-100 text-purple-600",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4"
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-xl ${item.color}`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{item.title}</p>
                    <p className="text-gray-600">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Name
                </label>
                <input
                  name="user_name"
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email
                </label>
                <input
                  name="user_email"
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
              >
                Send Message
              </motion.button>
              {status && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center mt-4 text-sm text-green-600"
                >
                  {status}
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
