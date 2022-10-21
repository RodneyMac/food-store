import React from 'react';
import { addToCart } from '../features/cartSlice';
import { useGetAllProductsQuery } from '../features/productsApi';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Pizzas = () => {
  const {data, error, isLoading} = useGetAllProductsQuery();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  }

  return (
    <div className='container'>
      {
        isLoading ? <div className="text-center mt-4">Loading...</div> : error ? <div>Ocurrió un error</div> : 
        <>
          <h4 className='text-info mt-4 text-center'>Pizzas</h4>
          <div className='d-flex justify-content-center align-items-center'>
            <div className='row'>
              {data?.map((product) => {
                if(product.category === "Pizzas") {
                  return(
                    <div className='col-md-4 mt-4' key={product.id}>
                      <div className='d-flex flex-column justify-content-center align-items-center'>
                        <div className='text-warning d-flex'>ID:<div className='text-info mx-1'>{product.id}</div></div>
                        <img src={product.imgUrl} alt={product.title} className="w-50 rounded"/>
                        <div className='text-info mt-1'>{product.title}</div>
                        <div className='text-white'>{product.description}</div>
                        <div className='text-warning'>$ {product.price}</div>
                        <button className='btn btn-outline-primary mt-2' onClick={() => handleAddToCart(product)}>Agregar</button>
                      </div>
                    </div>
                  )
                }
              })}
            </div>
          </div>
        </>
      }
    </div>
  )
}

export default Pizzas;