import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '../components/Layout'
import ProductCard from '../components/ProductCard';

import Routetransition from '../components/Routetransition';
import Skincareproducts from '../Data/Data';


   




export default function Products({ product }) {
  const [showDesc, setShowDesc] = useState(false);

  return (
    <Layout>
     <Routetransition>
     <div className="relative flex flex-wrap gap-4 w-full h-full mt-10"
     initial={{ opacity:0,y:20}}
     whileinview={{ opacity:1,y:0}}
     transition={{ duration:0.5, ease:'easeInOut' }}>
  {Skincareproducts.map((product) => (
    <ProductCard key={product.id} product={product} />
  ))}
</div>
</Routetransition>
    </Layout>
  );
}
