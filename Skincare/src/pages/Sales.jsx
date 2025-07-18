import React from 'react'
import Layout from '../components/Layout'
import Routetransition from '../components/Routetransition'
import Skincareproducts from '../Data/Data'
import ProductCard from '../components/ProductCard'

function Sales() {
  const onSaleProducts = Skincareproducts.filter(product => product.onSale);
  return (
   <Layout>
    <Routetransition>
      <div className="px-4 py-6">

        <h2 className="text-xl font-semibold mt-12 text-center mb-4">
          Sales and Discounts
          </h2>
        
           {onSaleProducts
            .length > 0 ? (
              <div className="flex flex-wrap gap-4 justify-center">
                {onSaleProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-600">No products on sale at the moment.</p>
            )}
          </div>
        


    </Routetransition>
   </Layout>  )
}

export default Sales