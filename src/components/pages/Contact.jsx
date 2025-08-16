import React, { useRef, useState } from "react";
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
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600">Let's work together on your next project</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xl">📧</div>
                <div>
                  <p className="font-semibold text-gray-800">Email</p>
                  <p className="text-gray-600">wahidhusaindev@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-xl">📱</div>
                <div>
                  <p className="font-semibold text-gray-800">Phone</p>
                  <p className="text-gray-600">+91 7900288140</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-xl">🌐</div>
                <div>
                  <p className="font-semibold text-gray-800">LinkedIn</p>
                  <p className="text-gray-600">linkedin.com/in/wahidhusaindev</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Name</label>
                <input name="user_name" type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg" placeholder="Your Name" required />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                <input name="user_email" type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg" placeholder="your@email.com" required />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea name="message" rows="4" className="w-full px-4 py-3 border border-gray-300 rounded-lg" placeholder="Tell me about your project..." required></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
                Send Message
              </button>
              {status && (
                <p className="text-center mt-4 text-sm text-green-600">{status}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
