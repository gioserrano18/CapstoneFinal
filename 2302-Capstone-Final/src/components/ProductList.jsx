import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../Context/Cart';
import Cart from './shoppingCart';
import FilterOptions from './FilterOptions';

export default function Products() {
  const [products, setProducts] = useState([])
  const { cartItems, addToCart } = useContext(CartContext)
  const [showModal, setShowModal] = useState(false)
  const [sortedProducts, setSortedProducts] = useState([]);


  const toggle = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => {
        console.error('Error fetching product data:', error);
      });
  }, []);

  const sortProducts = (sortType) => {
    const sorted = [...products];
    sorted.sort((a, b) => {
      return sortType === 'asc' ? a.price - b.price : b.price - a.price;
    });
    setSortedProducts(sorted);
  };


  return (
    <div className='flex flex-col justify-center bg-gray-100'>
      <div className='flex justify-between items-center px-20 py-5'>
        <h1 className='text-2xl uppercase font-bold mt-10 text-center mb-10'>Shop</h1>
        <FilterOptions sortProducts={sortProducts} />
        {!showModal && (
          <>
            <button className='px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700' onClick={toggle}>Cart ({cartItems.length})</button>
          </>
          )}
      </div>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-10'>
        {
          sortedProducts.map(product => (
            <div key={product.id} className='bg-white shadow-md rounded-lg px-10 py-10'>
              <img src={product.image} alt={product.title} className='rounded-md h-48' />
              <div className='mt-4'>
                <h1 className='text-lg uppercase font-bold'>{product.title}</h1>
                <p className='mt-2 text-gray-600 text-sm'>{product.description.slice(0, 40)}...</p>
                <p className='mt-2 text-gray-600'>${product.price}</p>
              </div>
              <div className='mt-6 flex justify-between items-center'>
                <button onClick={() => addToCart(product)} className='px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700'>Add to cart</button>
              </div>
            </div>
          ))
        }
      </div>
      <Cart showModal={showModal} toggle={toggle} />
    </div>
  )
}