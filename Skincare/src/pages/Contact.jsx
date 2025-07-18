import React from "react";
import Layout from "../components/Layout";
import contact from '../assets/contact.avif';
import {motion} from 'framer-motion'
const fadeUp={
  hidden:{opacity:0, y:10},
  visible:{
    opacity:1, y:0,
    transition: { duration: 0.8, ease: 'easeOut' }

  }
}

export default function ContactUs() {
  return (
    <Layout>
     
        <div className="absolute inset-0 bg-black opacity-20 z-0"></div>

        <section className="relative z-10 bg-gray-100 bg-opacity-90 min-h-screen py-20 px-4 md:px-10 font-family-outfit">
          <motion.div variants={fadeUp} initial='hidden' whileInView='visible' className="max-w-4xl mx-auto bg-white shadow-[0_10px_25px_rgba(0,0,0,0.1)] rounded-2xl p-10">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
              Get in Touch with Glowrin
            </h2>
            <p className="text-center text-gray-600 mb-10">
              We’d love to hear from you! Whether you have a question about our products, your skin type, or just want to say hi — our team is ready to answer all your questions.
            </p>

            <form className="space-y-6">
              <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 shadow-sm focus:border-gray-700 focus:ring-gray-700 bg-white text-gray-800"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 shadow-sm focus:border-gray-700 focus:ring-gray-700 bg-white text-gray-800"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Your Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Tell us what’s on your mind..."
                  className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 shadow-sm focus:border-gray-700 focus:ring-gray-700 bg-white text-gray-800"
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gray-800 text-white px-8 py-3 rounded-xl hover:bg-black transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </section>
      
    </Layout>
  );
}
