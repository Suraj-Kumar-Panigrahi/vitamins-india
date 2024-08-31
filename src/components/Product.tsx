import React from 'react';

interface ProductProps {
  title: string;
  description: string;
  image: string;
}

const Product: React.FC<ProductProps> = ({ title, description, image }) => {
  return (
    <section className="product">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </section>
  );
};

export default Product;
