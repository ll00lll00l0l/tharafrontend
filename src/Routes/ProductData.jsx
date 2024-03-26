import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import NavbarWhite from '../components/NavbarWhite';
import Footer from '../components/Footer';
import '../styles/Productdata.css';
import baseURL from '../config/config';

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [items, setItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${baseURL}/api/item/${id}/`);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const contentType = response.headers.get('content-type');

        if (!contentType || !contentType.includes('application/json')) {
          throw new Error('Invalid content type. Expected JSON.');
        }

        const productData = await response.json();
        setProduct(productData);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchData();
  }, [id]);

  const getItemData = async () => {
    try {
      const itemResponse = await fetch(`${baseURL}/api/item/`);

      if (!itemResponse.ok) {
        throw new Error(`HTTP error! Status: ${itemResponse.status}`);
      }

      const contentType = itemResponse.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Invalid content type. Expected JSON.');
      }

      const itemData = await itemResponse.json();
      setItems(itemData.results);
    } catch (error) {
      console.error('Error fetching item data:', error);
    }
  };

  useEffect(() => {
    getItemData();
  }, []); // Call getItemData once when the component mounts

  const newBaseURL = `${baseURL}`;
  const imagePathWithoutBaseURL = product?.image?.replace('https://0.0.0.0:9090', newBaseURL);

  return (
    <div>
      <NavbarWhite />

      {product && (
        <div className='rowaligmm row'>
          {product.image && (
            <div className='divimgdata col-md-6'>
              <img
                src={imagePathWithoutBaseURL}
                alt={product.name}
                className="img-fluid"
              />
            </div>
          )}
          <div className='proddatacol col-md-6'>
            <div>
              <h6>Home / Products</h6>
              <h1>{product.name}</h1>
              <span className='spandata'>
                <p><b>Brand</b> {product.brand}</p>
                <p><b>Sold by</b> {product.company}</p>
              </span>
            </div>
            <div className='datause'>
              <ul>
                {product.uses.split(/\r?\n/).map((use, index) => (
                  <React.Fragment key={index}>
                    {index >1}
                    <li>{use}</li>
                  </React.Fragment>
                ))}
              </ul>
            </div>
            <div className='datause'>
              <h3>Ingredients:</h3>
              <p>{product.Ingredients}</p>
            </div>
            <div>
              <Link to="/product">
                <div className="arrow-container">
                  <button className="btn-white" id="hide">
                    Buy Now
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="31"
                      viewBox="0 0 30 31"
                      fill="none"
                      className="arrow"
                    >
                      <path
                        d="M16.4583 8.14621L23.75 15.6462M23.75 15.6462L16.4583 23.1462M23.75 15.6462L6.25 15.6462"
                        stroke="#450079"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </Link>
            </div>
          </div>
          <div>
            <div className='Similarprod'>
              <b>View Similar Products</b>
              {items
                .filter((item) => item.brand === product.brand)
                .map((filteredItem) => {
                  const filteredItemWithoutBaseURL = filteredItem?.image?.replace('https://0.0.0.0:9090', newBaseURL);
                  return (
                    <div className='Similarproddata'>
                    <div key={filteredItem.id} >
                      {filteredItem.image && (
                        <img
                          src={filteredItemWithoutBaseURL}
                          alt={filteredItem.name}
                          style={{ width: '250px', height: '100%' }}
                        />
                      )}
                      <Link to={`/product/${filteredItem.id}`}>{filteredItem.name}</Link>
                    </div></div>
                  );
                })}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ProductDetail;
