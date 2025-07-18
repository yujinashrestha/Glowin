import Layout from "../components/Layout";
import efaceoil from "../assets/efaceoil.jpg";
import { useEffect, useState } from "react";
import Routetransition from "../components/Routetransition";
import about1 from "../assets/about1.jpg";
import about2 from "../assets/about3.avif";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

// Animation config
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function About() {
  

 

  return (
    <div>
      <div className="relative bg-white text-black h-full w-full overflow-hidden">
        {/* Video section (no animation) */}
        <div className="relative left-0 w-full h-[100%] z-0 overflow-hidden">
          <img
            className="w-full h-[100%] object-cover block"
            src={efaceoil}
          >
           
          </img>
        </div>

        {/* Animated constant text above video */}
        <div className="absolute top-1/3 left-1/6 -translate-x-1/2 text-center p-6 rounded-lg z-10 w-fit">
          <Routetransition>
            <motion.div
              animate={{ opacity: [0, 1], y: [20, 0] }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <h1 className="text-4xl font-bold text-left text-gray-700 font-family-outfit">
                About Glowrin
              </h1>
              <p className="text-left max-w-2xl font-bold text-gray-700">
                Welcome to our story!
              </p>
            </motion.div>
          </Routetransition>
        </div>
      </div>

      {/* Section: Welcome */}
      <motion.div
        className="bg-black text-white text-center text-3xl px-7 py-24"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="font-bold">
          Welcome to Glowrin – Where Your Skin Glows Naturally
        </h2>
        <p className="p-7 font-semibold text-lg px-32">
          At Glowrin, we believe that skincare is not just about beauty – it's
          about self-love, confidence, and a healthy lifestyle.
        </p>
      </motion.div>

      {/* Section: Our Story */}
      <motion.div
        className="bg-white text-black py-20 font-bold font-family-sans text-center text-4xl"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2>Our Story</h2>
        <p className="p-7 font-semibold text-xl px-32">
          Glowrin was born out of a passion for clean beauty and a desire to
          simplify skincare. Like many, we struggled to find products that were
          both kind to the skin and the planet...
        </p>
      </motion.div>

      <motion.img
        src={about1}
        alt="About Image 1"
        className="w-full object-cover h-[600px]"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      />

      <motion.div
        className="bg-black text-white font-sans text-center px-6 py-24"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-8">What We Stand For</h2>
        <ul className="max-w-4xl mx-auto text-left space-y-6 text-lg font-medium leading-relaxed">
          <li className="flex items-start gap-3">
            <span className="text-white">🧪</span>
            <span>
              <strong>Clean Ingredients –</strong> No harsh chemicals, only
              plant-powered formulas.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-white">🌿</span>
            <span>
              <strong>Gentle Yet Effective –</strong> Ingredients that soothe and
              hydrate.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-white">🐰</span>
            <span>
              <strong>Cruelty-Free –</strong> We never test on animals.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-white">🤝</span>
            <span>
              <strong>Inclusive Beauty –</strong> Glowrin is for everyone.
            </span>
          </li>
        </ul>
      </motion.div>

      <motion.img
        src={about2}
        alt="About Image 2"
        className="w-full object-cover h-[600px]"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      />

      <motion.div
        className="bg-white text-black text-center text-3xl py-24 px-6"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="font-bold">Our Promise</h2>
        <p className="p-7 font-semibold text-lg px-32">
          Your skin deserves the best. Each Glowrin product is dermatologically
          tested, ethically made, and fits into your lifestyle.
        </p>
      </motion.div>
     

    </div>
  );
}
