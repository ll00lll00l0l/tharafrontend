import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductList.css';
import { product } from './../common/data.js'; 
class ProductList extends Component {
  state = {
    brandFilter: ['allBrands'],
    companyFilter: ['allCompanies'],
  };

  handleBrandFilterChange = (event) => {
    const selectedBrand = event.target.value;

    this.setState((prevState) => {
      const updatedBrands = [...prevState.brandFilter];

      if (selectedBrand === 'allBrands') {
        return { brandFilter: ['allBrands'] }; 
      }

      const index = updatedBrands.indexOf(selectedBrand);

      if (index === -1) {
        updatedBrands.push(selectedBrand); 
      } else {
        updatedBrands.splice(index, 1); 
      }

      const filteredBrands = updatedBrands.filter((brand) => brand !== 'allBrands');

      return { brandFilter: filteredBrands.length ? filteredBrands : ['allBrands'] };
    });
  };

  handleCompanyFilterChange = (event) => {
    const selectedCompany = event.target.value;

    this.setState((prevState) => {
      const updatedCompanies = [...prevState.companyFilter];

      if (selectedCompany === 'allCompanies') {
        return { companyFilter: ['allCompanies'] }; 
      }

      const index = updatedCompanies.indexOf(selectedCompany);

      if (index === -1) {
        updatedCompanies.push(selectedCompany); 
      } else {
        updatedCompanies.splice(index, 1); 
      }

      const filteredCompanies = updatedCompanies.filter((company) => company !== 'allCompanies');

      return { companyFilter: filteredCompanies.length ? filteredCompanies : ['allCompanies'] };
    });
  };

  render() {
    const { brandFilter, companyFilter } = this.state;

    
    const uniqueBrands = [...new Set(product.map((item) => item.brand))];
    const uniqueCompanies = [...new Set(product.map((item) => item.company))];

    const filteredProducts = product.filter((item) => {
      const brandMatch =
        brandFilter.length === 1 && brandFilter[0] === 'allBrands'
          ? true
          : brandFilter.includes(item.brand);

      const companyMatch =
        companyFilter.length === 1 && companyFilter[0] === 'allCompanies'
          ? true
          : companyFilter.includes(item.company);

      return brandMatch && companyMatch;
    });

    return (
      <div className='prodlistbrod'>
        <div className='prodlistoutdiv'>
          <div  className='prodfilter'>
            <p>Filter</p>
              <div>
            <div className='prodcol'>

              <span>Brand:</span>
              <div>
                <input
                  type='checkbox'
                  id='allBrands'
                  value='allBrands'
                  checked={brandFilter.includes('allBrands')}
                  onChange={this.handleBrandFilterChange}
                />
                <label htmlFor='allBrands'>All Brands</label>
              </div>
              {uniqueBrands.map((brand) => (
                <div key={brand}>
                  <input
                    type='checkbox'
                    id={brand}
                    value={brand}
                    checked={brandFilter.includes(brand)}
                    onChange={this.handleBrandFilterChange}
                  />
                  <label htmlFor={brand}>{brand}</label>
                </div>
              ))}
            </div>

            <div className='prodcol'>
              <span>Company:</span>
              <div>
                <input
                  type='checkbox'
                  id='allCompanies'
                  value='allCompanies'
                  checked={companyFilter.includes('allCompanies')}
                  onChange={this.handleCompanyFilterChange}
                />
                <label htmlFor='allCompanies'>All Companies</label>
              </div>
              {uniqueCompanies.map((company) => (
                <div key={company}>
                  <input
                    type='checkbox'
                    id={company}
                    value={company}
                    checked={companyFilter.includes(company)}
                    onChange={this.handleCompanyFilterChange}
                  />
                  <label htmlFor={company}>{company}</label>
                </div>
              ))}
            </div>
          </div>
          </div>

          <div className='listprobrod'>
            {filteredProducts.map((item) => (
              <div className='probrod' key={item.id}>
                <div>
                  <img src={item.product_link || '/placeholder.jpg'} alt={item.name}  width={200} height={200}/>

                  <Link to={`${item.id}`}>{item.name}</Link>
         
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;
