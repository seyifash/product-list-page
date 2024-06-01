import React from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link'

export const getStaticProps = async () => {
    let products;
    try{
    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }
    products = await response.json();
    }catch(error){
        console.log('Error fetching products',error)
    }

    return {
      props: {
        products: products || [],
      }
    }
}


export const getStaticPaths = async () => {

    let products = [];

    try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }
        products = await response.json();
    } catch (error) {
        console.error('Error fetching products:', error);
    }

    const paths = products.map((product) => ({
        params: { productId: product.id.toString() },
    }));

    return {
        paths,
        fallback: false,
    };
}

const Product = ({products}) => {
    const router = useRouter()
    const { productId } = router.query;
    const totalRate = 5;
   

    const product = products.find(product => product.id.toString() === productId)
    if(!product){
        return (
            <div>Product Not found</div>
        )
    }
    const rating = Math.floor(product.rating.rate);

    return (
      <div className="bg-white pl-4 pr-4">
        <div className='flex justify-between pt-6 pb-6 border-b-1 border-cusgry md:pb-10'>
            <h1 className="text-customBlue capitalize text-3xl font-bold  md:text-4xl lg:text-5xl xl:text-6xl">{product.category}</h1>
            <Link className="text-customBlue flex items-center text-sm font-medium" href="/"><i className='bx bx-left-arrow-alt text-orag text-xl md:text-4xl lg:text-5xl xl:text-6xl'></i> Back</Link>
        </div>
        <div className="w-full min-h-lt2  flex pl-8 pr-8 pt-6 pb-6 justify-center flex-wrap text-black max-799:pl-0 max-799:pr-0 md:pl-12 md:pr-12 ">
            <div className="w-full h-full md:w-2/5">
                <img className="w-full h-full" src={product.image} alt={`pics-${product.id}`} />
            </div>
            <div className="w-full pl-0 pt-10  md:w-3/5 md:pl-16 lg:pl-24">
                <div className="">
                    <h5 className="text-orag font-semibold  pb-4 text-sm md:text-2xl">{product.title}</h5>
                    <h6 className="text-customBlue text-4xl pb-6 md:text-5xl">${product.price}</h6>
                </div>
                <p className='w-full text-customBlue font-normal pb-4 text-sm md:text-base w-4/5'>{product.description}</p>
                <div className="flex w-1/4 text-sm justify-between md:text-2xl">
                    {[...Array(totalRate)].map((_, index) => (
                        <i key={index + 1} className={`bx bxs-star ${index < rating ? 'text-orag' : 'text-gray-500'}`}></i>
                    ))}
                </div>
                <span className='pt-6 text-customBlue flex font-semibold text-lg md:text-xl'>Total of {product.rating.count} ratings</span>
            </div>
        </div>
      </div>
    )
}

export default Product