import React from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {BsCart3} from "react-icons/bs";

const Navbar = () => {
  const {cartTotalQuantity} = useSelector((state) => state.cart);

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="m-auto">
        <div></div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className='my-2 mx-5'>
            <Link to="/" className='btn btn-outline-primary'>Inicio</Link>
          </div>
          <Link to="/carrito" className='d-flex align-items-center text-decoration-none my-2 mx-5 btn btn-outline-primary' role="button">
              <BsCart3/>
            <div className='text-warning mx-2'>{cartTotalQuantity}</div>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;