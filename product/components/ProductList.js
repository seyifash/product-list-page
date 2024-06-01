import React, { useEffect, useState} from 'react';
import Link from 'next/link';

const ProductList = ({products, searchInput}) => {

  const numPerPage = 10;
  const [ currentPage, setCurrentPage] = useState(0);
  const [canNextPage, setNextPage] = useState(true);
  const [canPrevPage, setPrevPage] = useState(false);

  const filteredProducts = searchInput ? products.filter(product => product.title.toLowerCase().includes(searchInput.toLowerCase()) || product.category.toLowerCase().includes(searchInput.toLowerCase())) :
  products;
  const productLen = filteredProducts.length;

  useEffect(() => {
    setPrevPage(currentPage > 0)
    setNextPage(currentPage + numPerPage < productLen)
  }, [currentPage, productLen, numPerPage])

  const handleCurrentPage = () => {
    if(currentPage + numPerPage < productLen){
      setCurrentPage(currentPage + numPerPage)
    }
  }

  const handlePrevPage = () => {
    if(currentPage - numPerPage >= 0){
      setCurrentPage(currentPage - numPerPage)
    }
  }


  return (
    <div className='pb-16'>
      <div className='w-full flex flex-col md:grid grid-cols-2 gap-x-4 lg:grid-cols-3 xl:grid-cols-4'>
          {filteredProducts.slice(currentPage, currentPage + numPerPage).map((product) => (
              <div  className="w-full flex flex-col justify-center border border-cusgry  min-h-lt mb-8 rounded-3xl p-4 shadow-custom-sm hover:shadow-custom-bg cursor-pointer" key={product.id}>
                  <img className="w-full h-myHt2 mb-8" src={product.image} alt={`pics-${product.id}`} />
                  <div className="h-1/4 w-full flex justify-between flex-col">
                      <div>
                        <h6 className="text-customBlue font-semibold text-start text-sm">{product.title}</h6>
                        <h5  className="text-customBlue font-bold text-base pt-2 mb-4">
                          ${product.price}
                        </h5>
                      </div>
                      
                      <Link href={`/products/${product.id}`} className="w-24 text-center p-2 bg-orag rounded-md text-sm text-customBlue font-semibold">
                          View item
                      </Link>
                  </div>
              </div>
          ))}
      </div>
      <div className="flex justify-center mt-4">
        <button className={`px-4 py-2 mr-4 font-medium ${canPrevPage ? 'bg-customBlue' : 'bg-ds'} text-orag rounded`} onClick={handlePrevPage} disabled={!canPrevPage ? true : false}>
          Prev
        </button>
        <span className="mr-4 text-center font-semibold text-orag">{currentPage / numPerPage}</span>
        <button className={`px-4 py-2 ${canNextPage ? 'bg-customBlue' : 'bg-ds'} text-orag rounded`} onClick={handleCurrentPage} disabled={canNextPage ? false : true}>
          Next
        </button>
      </div>
    </div>
  )
}

export default ProductList