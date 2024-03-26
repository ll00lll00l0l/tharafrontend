import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductList.css';
import baseURL from '../config/config';


class ProductList extends Component {
  state = {
    products: [],
    brandFilter: ['allBrands'], // 'allBrands' is set as the default value
    companyFilter: ['allCompanies'], // 'allCompanies' is set as the default value
    isListVisible: true,
  };

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    try {
      const productResponse = await fetch(`${baseURL}/api/item/`);

      if (!productResponse.ok) {
        throw new Error(`HTTP error! Status: ${productResponse.status}`);
      }

      const contentType = productResponse.headers.get('content-type');

      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Invalid content type. Expected JSON.');
      }

      const productData = await productResponse.json();
      this.setState({ products: productData.results });
    } catch (error) {
      console.error('Error fetching product data:', error);
    }
  };

  handleBrandFilterChange = (event) => {
    const selectedBrand = event.target.value;

    this.setState((prevState) => {
      const updatedBrands = [...prevState.brandFilter];

      if (selectedBrand === 'allBrands') {
        return { brandFilter: ['allBrands'] }; // Select 'All Brands' only
      }

      const index = updatedBrands.indexOf(selectedBrand);

      if (index === -1) {
        updatedBrands.push(selectedBrand);
      } else {
        updatedBrands.splice(index, 1);
      }

      return { brandFilter: updatedBrands };
    });
  };

  handleCompanyFilterChange = (event) => {
    const selectedCompany = event.target.value;

    this.setState((prevState) => {
      const updatedCompanies = [...prevState.companyFilter];

      if (selectedCompany === 'allCompanies') {
        return { companyFilter: ['allCompanies'] }; // Select 'All Companies' only
      }

      const index = updatedCompanies.indexOf(selectedCompany);

      if (index === -1) {
        updatedCompanies.push(selectedCompany);
      } else {
        updatedCompanies.splice(index, 1);
      }

      return { companyFilter: updatedCompanies };
    });
  };

  render() {
    const { products, brandFilter, companyFilter, isListVisible } = this.state;

    const uniqueBrands = [...new Set(products.map((product) => product.brand))];
    const uniqueCompanies = [...new Set(products.map((product) => product.company))];

    const filteredProducts = products.filter((product) => {
      const brandMatch =
        brandFilter.length === 1 && brandFilter[0] === 'allBrands'
          ? true
          : brandFilter.includes(product.brand);
      const companyMatch =
        companyFilter.length === 1 && companyFilter[0] === 'allCompanies'
          ? true
          : companyFilter.includes(product.company);

      return brandMatch && companyMatch;
    });

    return (
      <div className='prodlistbrod'>
        <div className='prodlistoutdiv'>
          <div className='prodfilter'>
              <p>Filter </p>
            <div className='prodcol'>
            
              <span>Brand:</span>
              {uniqueBrands.map((brand) => (
                <div key={brand}>
                  <input
                    type="checkbox"
                    id={brand}
                    name="brandFilter"
                    value={brand}
                    checked={brandFilter.includes(brand)}
                    onChange={this.handleBrandFilterChange}
                  />
                  <label htmlFor={brand}>{brand}</label>
                </div>
              ))}
            </div>

            <div className='prodcol'>
              <span> Company:</span>
              {uniqueCompanies.map((company) => (
                <div key={company}>
                  <input
                    type="checkbox"
                    id={company}
                    name="companyFilter"
                    value={company}
                    checked={companyFilter.includes(company)}
                    onChange={this.handleCompanyFilterChange}
                  />
                  <label htmlFor={company}>{company}</label>
                </div>
              ))}
            </div>
          </div>
          <div>
          {isListVisible && (
  <div className='listprobrod'>
    {filteredProducts.map((product) => {
      // Removing the base URL from the image path and replacing with the new base URL
      const newBaseURL = `${baseURL}`;
      const imagePathWithoutBaseURL = product.image.replace('https://0.0.0.0:9090', newBaseURL);

      return (
        <div className='probrod' key={product.id}>
           <div>  {product.image && <img src={imagePathWithoutBaseURL} alt={product.name} />}
       
            <Link to={`${product.id}`}>{product.name}</Link>
          </div>
        </div>
      );
    })}
  </div>
)}
  </div>
 </div>
 </div>
    );
  }
}

export default ProductList;