import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Phone from '../assets/img/phone.png';
import Email from '../assets/img/email.png';
import Website from '../assets/img/website.png';
import './List.css';
import baseURL from './config';

class BrandList extends Component {
  state = {
    brands: [],
    items: [],
    clickedBrandId: null,
  };

  componentDidMount() {
    this.getBrandData();
    this.getItemData();
  }

  getBrandData = async () => {
    try {
      const brandResponse = await fetch(`${baseURL}/api/brand/`);

      if (!brandResponse.ok) {
        throw new Error(`HTTP error! Status: ${brandResponse.status}`);
      }

      const contentType = brandResponse.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Invalid content type. Expected JSON.');
      }

      const brandData = await brandResponse.json();
      this.setState({ brands: brandData });
    } catch (error) {
      console.error('Error fetching brand data:', error);
    }
  };

  getItemData = async () => {
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
      this.setState({ items: itemData.results });
    } catch (error) {
      console.error('Error fetching item data:', error);
    }
  };

  handleBrandClick = (brandId) => {
    this.setState((prevState) => ({
      clickedBrandId: prevState.clickedBrandId === brandId ? null : brandId,
    }));
  };

  render() {
    const { brands, items, clickedBrandId } = this.state;

    return (
      <div className='listbroder'>
        <div className='aligm'>
          {brands.map((brand) => {
            const newBaseURL = `${baseURL}`;
            const imagePathWithoutBaseURL = brand.image.replace('http://0.0.0.0:9090', newBaseURL);

            return (
              <div key={brand.id} className='border-bottom rounded-sm p-3 pt-6'>
                {brand.image && (
                  <img
                    src={imagePathWithoutBaseURL}
                    alt={brand.name}
                    className='img-fluid '
                    style={{ width: 'auto', height: 'auto' }}
                  />
                )}
                <div key={brand.id}>
                  <div className='listbutton '>
                    <button
                      type='button'
                      className='btn btn-link '
                      data-toggle='collapse'
                      data-target={`#collapse${brand.id}`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none" style={{ transition: 'transform 0.5s, filter 0.5s', transform: clickedBrandId === brand.id ? 'rotate(-180deg)' : 'rotate(0deg)' }} onClick={() => this.handleBrandClick(brand.id)}>
                        <path d="M28.1818 19.1137C28.5 18.8486 28.543 18.3756 28.2778 18.0574C28.0127 17.7392 27.5397 17.6962 27.2215 17.9614L28.1818 19.1137ZM20.6305 24.4302L20.1504 25.0063C20.4285 25.2381 20.8325 25.2381 21.1107 25.0063L20.6305 24.4302ZM14.0396 17.9614C13.7214 17.6962 13.2484 17.7392 12.9833 18.0574C12.7181 18.3756 12.7611 18.8486 13.0793 19.1137L14.0396 17.9614ZM27.2215 17.9614L20.1504 23.854L21.1107 25.0063L28.1818 19.1137L27.2215 17.9614ZM21.1107 23.854L14.0396 17.9614L13.0793 19.1137L20.1504 25.0063L21.1107 23.854ZM35.5259 20.5386C35.5259 28.9609 28.6982 35.7886 20.2759 35.7886V37.2886C29.5266 37.2886 37.0259 29.7893 37.0259 20.5386H35.5259ZM20.2759 35.7886C11.8535 35.7886 5.02588 28.9609 5.02588 20.5386H3.52588C3.52588 29.7893 11.0251 37.2886 20.2759 37.2886V35.7886ZM5.02588 20.5386C5.02588 12.1162 11.8535 5.28857 20.2759 5.28857V3.78857C11.0251 3.78857 3.52588 11.2878 3.52588 20.5386H5.02588ZM20.2759 5.28857C28.6982 5.28857 35.5259 12.1162 35.5259 20.5386H37.0259C37.0259 11.2878 29.5266 3.78857 20.2759 3.78857V5.28857Z" fill="#1D1D1D" />
                      </svg>
                    </button>
                  </div>
                  <div id={`collapse${brand.id}`} className='collapse'>
                    <div className='row listrow'>
                      <div className='listcol col-md-6'>
                        <p className='py-2 text-dark'>{brand.description}</p>
                        <p className='py-2 text-dark'>
                          <img className='' src={Website} alt='img' />{' '}
                          <a href={brand.website_link}>{brand.website_link}</a>
                        </p>
                        <p className='py-2 text-dark'>
                          <img className='' src={Email} alt='img' /> {brand.email}
                        </p>
                        <span className='py-2 text-dark'>
                          <img className='' src={Phone} alt='img' />&nbsp;
                          {brand.phone_numbers.split(/\r?\n/).map((number, index) => (
                            <React.Fragment key={index}>
                              {index > 0 && <br />&&<br />}
                              {number}
                            </React.Fragment>
                          ))}
                        </span>
                      </div>
                      <div className=' listcol2 col-md-6'>
                        <b>Featured Brands :</b>
                        {items
                          .filter((item) => item.brand === brand.name)
                          .map((filteredItem) => (
                            <div key={filteredItem.id} className=''>
                              {filteredItem.image && (
                                // Corrected the use of 'const' and 'return'
                                (() => {
                                  const newBaseURL = `${baseURL}`;
                                  const imagePathWithoutBaseURL = filteredItem.image.replace('http://0.0.0.0:9090', newBaseURL);

                                  return (
                                    <img
                                      src={imagePathWithoutBaseURL}  // Use the corrected imagePathWithoutBaseURL
                                      alt={filteredItem.name}
                                      style={{ width: '150px', height: '100%' }}
                                    />
                                  );
                                })()
                              )}
                            </div>
                          ))}

                        <div className="arrow-container">
                          <Link to="/product">
                            <button className="btn-white">
                              View More
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
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default BrandList;
