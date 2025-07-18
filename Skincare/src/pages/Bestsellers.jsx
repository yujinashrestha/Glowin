import React from 'react'
import Layout from '../components/Layout'
import Routetransition from '../components/Routetransition'
import Skincareproducts from '../Data/Data'
import ProductCard from '../components/ProductCard'

function Bestsellers() {
  const bestProducts = Skincareproducts.filter(product => product.bestseller);

  return (
    <Layout>
      <Routetransition>
        <div className="px-4 py-6">
          <h2 className="text-xl font-semibold mt-12 text-center mb-4">
            Our Best Sellers
          </h2>

          <div className="flex flex-wrap gap-6 justify-center">
            {bestProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </Routetransition>
    </Layout>
  );
}

export default Bestsellers;
