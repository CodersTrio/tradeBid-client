import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import ProductCard from '../../components/ProductCard/ProductCard';
import './Home.css';

const Home = () => {
    const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    fetch("https://serene-savannah-96392.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProductsData(data);
      });
  }, []);
  console.log(productsData)
    return (
        <div>
            <Header/>
            <h1>Hello Home</h1>
            <div className="productsCard d-flex flex-wrap mx-auto text-center justify-content-around">
            {
                productsData.map((product) => <ProductCard product={product} key={product._id} />)
            }
            </div>
        </div>
    );
};

export default Home;