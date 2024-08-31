import React from 'react';
import Product from './Product';

const Products: React.FC = () => {
  return (
    <div className="products">
      <Product 
        title="Vitamin A"
        description="Essential for good vision and immune system."
        image="link-to-vitamin-a-image.jpg"
      />
      <Product 
        title="Vitamin B12"
        description="Supports nerve function and the production of DNA."
        image="link-to-vitamin-b12-image.jpg"
      />
      {/* Add more Product components as needed */}
    </div>
  );
};

export default Products;
