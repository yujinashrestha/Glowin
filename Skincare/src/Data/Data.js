import React from 'react'
import Aloeveragel from '../assets/aloevera gel.jpg';
import antiagingeyecream from '../assets/antiagingeyecream.jpg';
import brighteyeserum from '../assets/brighteyeserum.jpg';
import charcoalsoap from '../assets/charcoalsoap.jpg';
import faceoil from '../assets/efaceoil.jpg';
import exfoliatingscrub from '../assets/exfoliating scrub.jpg';
import facemask from '../assets/facemask.jpg';
import facewash from '../assets/facewash.jpg';
import facialcleanser from '../assets/facial cleanser.jpg';
import facialhydratingmist from '../assets/facial hydrating mist.jpg';
import facialmist from '../assets/facial mist.jpg';
import hydratingfaceserum from '../assets/hydrating face serum.jpg';
import lipbalm from '../assets/lipbalm.jpg';
import moisturizinglotion from '../assets/moisturizinglotion.jpg';
import nightcream from '../assets/nightcream.jpg';
import toner from '../assets/refreshing toner.jpg';
import sunscreen from '../assets/sunscreen.jpg';

 const Skincareproducts = [
  {
    id: 1,
    name: "Glowrin Hydrating Face Serum",
    description: "A lightweight serum that deeply hydrates and brightens your skin with hyaluronic acid and vitamin C.",
    price: 29.99,
    image: hydratingfaceserum,
    category: "Serums",
    bestseller: true
  },
  {
    id: 2,
    name: "Glowrin Soothing Aloe Vera Gel",
    description: "Calming aloe vera gel to soothe irritated skin and provide cooling hydration all day long.",
    price: 15.49,
    image: Aloeveragel,
    category: "Gels",
    onSale: true
  },
  {
    id: 3,
    name: "Glowrin Daily Sunscreen SPF 50",
    description: "Broad spectrum sunscreen protecting your skin from harmful UVA and UVB rays with a lightweight, non-greasy formula.",
    price: 22.99,
    image: sunscreen,
    category: "Sunscreen",
    bestseller: true,
    onSale: true
  },
  {
    id: 4,
    name: "Glowrin Gentle Exfoliating Scrub",
    description: "A gentle scrub with natural exfoliants to remove dead skin cells and reveal a smoother complexion.",
    price: 18.75,
    image: exfoliatingscrub,
    category: "Exfoliators",
    onSale: true
  },
  {
    id: 5,
    name: "Glowrin Night Repair Cream",
    description: "Rich night cream that nourishes and repairs skin overnight for a rejuvenated morning glow.",
    price: 35.00,
    image: nightcream,
    category: "Moisturizers",
    bestseller: true
  },
  {
    id: 6,
    name: "Glowrin Vitamin E Face Oil",
    description: "Natural vitamin E oil to moisturize dry skin and improve elasticity.",
    price: 27.50,
    image: faceoil,
    category: "Oils"
  },
  {
    id: 7,
    name: "Glowrin Deep Cleansing Clay Mask",
    description: "Detoxify and purify your skin with this mineral-rich clay mask.",
    price: 20.00,
    image: facemask,
    category: "Masks"
  },
  {
    id: 8,
    name: "Glowrin Refreshing Toner",
    description: "Alcohol-free toner to balance skin pH and tighten pores gently.",
    price: 14.99,
    image: toner,
    category: "Toners",
    onSale: true
  },
  {
    id: 9,
    name: "Glowrin Anti-Aging Eye Cream",
    description: "Reduce fine lines and dark circles with this nourishing eye cream.",
    price: 32.00,
    image: antiagingeyecream,
    category: "Eye Care",
    bestseller: true
  },
  {
    id: 10,
    name: "Glowrin Hydrating Facial Mist",
    description: "Instant hydration and refreshment for your skin anytime, anywhere.",
    price: 12.50,
    image: facialhydratingmist,
    category: "Mists"
  },
  {
    id: 11,
    name: "Glowrin Brightening Face Wash",
    description: "Gentle cleanser with natural extracts to brighten dull skin.",
    price: 16.99,
    image: facewash,
    category: "Cleansers",
    bestseller: true
  },
  {
    id: 12,
    name: "Glowrin Soothing Night Serum",
    description: "Repair and calm your skin overnight with this potent serum.",
    price: 30.00,
    image: brighteyeserum,
    category: "Serums"
  },
  {
    id: 13,
    name: "Glowrin Nourishing Lip Balm",
    description: "Keep your lips soft and hydrated with this natural lip balm.",
    price: 8.99,
    image: lipbalm,
    category: "Lip Care",
    onSale: true,
    bestseller: true
  },
  {
    id: 14,
    name: "Glowrin Revitalizing Face Mask",
    description: "Rejuvenate tired skin with this vitamin-packed revitalizing mask.",
    price: 19.99,
    image: facemask,
    category: "Masks"
  },
  {
    id: 15,
    name: "Glowrin Calming Night Cream",
    description: "Soothe sensitive skin overnight with this calming formula.",
    price: 34.00,
    image: antiagingeyecream,
    category: "Moisturizers"
  },
  {
    id: 16,
    name: "Glowrin Ultra Moisturizing Lotion",
    description: "Lightweight lotion that provides long-lasting moisture.",
    price: 21.00,
    image: moisturizinglotion,
    category: "Moisturizers",
    onSale: true
  },
  {
    id: 17,
    name: "Glowrin Purifying Charcoal Soap",
    description: "Detoxify your skin daily with activated charcoal soap bar.",
    price: 9.99,
    image: charcoalsoap,
    category: "Cleansers"
  },
  {
    id: 18,
    name: "Glowrin Bright Eyes Serum",
    description: "Reduce puffiness and brighten eyes with this refreshing serum.",
    price: 28.00,
    image: brighteyeserum,
    category: "Eye Care"
  },
  {
    id: 19,
    name: "Glowrin Shea Butter Hand Cream",
    description: "Rich hand cream infused with shea butter for intense hydration.",
    price: 14.50,
    image: moisturizinglotion,
    category: "Hand Care",
    onSale: true
  },
  {
    id: 20,
    name: "Glowrin Daily Facial Cleanser",
    description: "Gentle cleanser for everyday use that removes impurities effectively.",
    price: 17.99,
    image: facialcleanser,
    category: "Cleansers"
  }
];


export default Skincareproducts;