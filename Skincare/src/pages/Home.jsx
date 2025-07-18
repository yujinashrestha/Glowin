import React, { useState, useEffect } from 'react';
import hero1 from '../assets/home1.webp';
import hero2 from '../assets/home2.webp';
import hero3 from '../assets/home3.webp';
import hero4 from '../assets/home4.webp';
import hero5 from '../assets/home5.webp';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import Routetransition from '../components/Routetransition';

const images = [hero1, hero2, hero3, hero4, hero5];

const itemVariants = {
  hidden: { opacity: 0,  y: 10 },
  visible: { opacity: 1, y:0 },
  transition: {
      duration: 0.01,
      ease: 'fadeIn',
    },
};

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Updated content for Why Glowrin
  const whyGlowrinItems = [
    {
      icon: '🧪',
      title: 'Science Meets Nature',
      desc: 'We combine clinically proven ingredients with gentle, natural botanicals to deliver effective skincare without compromise.',
    },
    {
      icon: '🌈',
      title: 'Glow for Every Skin',
      desc: 'Our formulas are crafted for all skin types — especially sensitive and melanin-rich — so everyone can enjoy radiant, healthy skin.',
    },
    {
      icon: '🌱',
      title: 'Clean & Conscious',
      desc: 'Free from parabens, sulfates, and harmful chemicals. We prioritize cruelty-free, eco-friendly products that nurture both your skin and the planet.',
    },
    {
      icon: '✨',
      title: 'Visible Results',
      desc: 'Experience a glowing transformation from day one. With consistent use, enjoy long-lasting skin health and brightness.',
    },
    {
      icon: '🤝',
      title: 'Community First',
      desc: 'More than just a brand, Glowrin is a supportive space dedicated to educating, uplifting, and empowering our customers.',
    },
  ];

  // Postcard testimonials
  const testimonials = [
    {
      id: 1,
      image: hero1,
      quote: "Glowrin transformed my skin in just 2 weeks! My dark spots have faded significantly.",
      author: "Sarah J."
    },
    {
      id: 2,
      image: hero2,
      quote: "Finally found products that don't irritate my sensitive skin. The hydration is unbelievable!",
      author: "Michael T."
    },
    {
      id: 3,
      image: hero3,
      quote: "The natural glow I've achieved with Glowrin is exactly what I've been searching for.",
      author: "Priya K."
    },
    {
      id: 4,
      image: hero4,
      quote: "My acne scars have visibly reduced after using Glowrin's night serum consistently for a month.",
      author: "Alex R."
    }
  ];

  // Animation variants for postcards
  const postcardVariants = {
    hidden: { opacity: 0, y: 50, x: -50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <Layout>
      <div className="relative h-screen w-full overflow-hidden">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Hero ${index}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-[3000ms] ease-in-out ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          />
        ))}

        <div className="absolute top-1/3 left-1/5 -translate-x-1/2 text-center backdrop-blur-sm p-6 rounded-lg z-10 w-fit">
          <Routetransition>
            <h1 className="text-3xl font-bold text-black font-family-outfit ml-11">
              Welcome to Glowrin
            </h1>
            <p className="max-w-xl mx-auto mt-2 font-medium text-black font-family-outfit ml-11">
              Discover your natural glow with our curated skincare products.
            </p>
          </Routetransition>
        </div>
      </div>

      <motion.div className="px-4 py-12">
        <motion.h1
          className="text-center text-black font-semibold p-5 font-family-swash text-3xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          WHY GLOWRIN ?
        </motion.h1>

        <div className="flex flex-wrap justify-center gap-8">
          {whyGlowrinItems.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center bg-white rounded-2xl shadow-lg p-6 w-[280px] hover:scale-105 transition-transform duration-300"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 text-3xl flex items-center justify-center mb-4 shadow-md">
                {item.icon}
              </div>
              <h3 className="text-black font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* New Testimonials Section with Postcard Animation */}
      <motion.div 
        className="px-4 py-16 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.h2 
          className="text-center text-3xl font-bold text-black mb-12 font-family-swash"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Real Stories, Real Glow
        </motion.h2>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              variants={postcardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.3 }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
            >
              <img 
                src={testimonial.image} 
                alt={testimonial.author}
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                <p className="text-black font-semibold">- {testimonial.author}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Layout>
  );
}

export default Home;