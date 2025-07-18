import React from "react";
import Layout from "../components/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: "easeOut" },
  },
};

export default function SignUp() {
  return (
    <Layout>
      <div className="flex min-h-screen items-center justify-center bg-gray-100 pt-20 pb-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <div className="w-full max-w-md bg-white rounded-2xl shadow-[25px_25px_60px_rgba(0,0,0,0.1)] p-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 font-serif mb-6">
              Join Glowrin
            </h2>
            <h3 className="text-xl font-semibold text-center text-gray-700 mb-4">
              Create Your Skincare Account
            </h3>

            <form className="space-y-4">
              <div>
                <label className="block text-gray-600 text-sm mb-1" htmlFor="name">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-700 focus:outline-none bg-white text-gray-800"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-600 text-sm mb-1" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-700 focus:outline-none bg-white text-gray-800"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-600 text-sm mb-1" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-700 focus:outline-none bg-white text-gray-800"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-600 text-sm mb-1" htmlFor="confirm-password">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  placeholder="••••••••"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-700 focus:outline-none bg-white text-gray-800"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gray-800 hover:bg-black text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
              >
                Create Account
              </button>
            </form>

            <p className="text-center text-sm text-gray-600 mt-6">
              Already have an account?{" "}
              <Link to="/signin" className="text-gray-800 hover:underline font-medium">
                Login
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
