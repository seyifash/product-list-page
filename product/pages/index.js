import React, { useState} from 'react';
import SearchInput from '@/components/SearchInput';
import ProductList from '@/components/ProductList';

export const getStaticProps = async () => {

    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();

    return {
      props: {
        products,
      }
    }
}


const Home = ({products}) =>  {
  const [searchInput, setSearchInput] = useState('')

  const categories = [];
  products.forEach(product => {
    if(!categories.includes(product.category)){
      categories.push(product.category)
    }
  })

  return (
    <div className="font-quicksand bg-white pr-6 pl-6 w-full min-h-screen md:pr-12 md:pl-12">
      <header className='flex justify-center pt-9 pb-4 md:pb-9'>
        <h1 className="text-customBlue text-3xl font-semibold md:text-6xl">Product Listing</h1>
      </header>
      <SearchInput searchInput={searchInput} setSearchInput={setSearchInput} />
      <nav className="w-full flex pb-4 text-customBlue md:pb-9">
        {categories.map((category, index) => (
          index + 1 < categories.length ?
          (<span className="uppercase flex font-semibold text-cf mr-0 md:text-base md:mr-2" key={index + 1}>{category}/</span>) :
          ( 
            <span className="uppercase flex font-semibold text-cf md:text-base" key={index + 1}>{category}</span>
          )
        ))}
      </nav>
      <ProductList products={products} searchInput={searchInput} />
    </div>
  )
}

export default Home