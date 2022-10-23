import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsCart3 } from "react-icons/bs";

const Navbar = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cart);

  const [btnTap, setbtnTap] = useState(0);

  const handleBtnChange = (btnItem) => {
    if (btnTap !== btnItem) {
      setbtnTap(btnItem);
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="m-auto">
          <div></div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="my-2 mx-5">
              <Link
                to="/"
                className={
                  btnTap === 1
                    ? "btn btn-primary active"
                    : "btn btn-outline-primary"
                }
                onClick={() => handleBtnChange(1)}
              >
                Inicio
              </Link>
            </div>
            <Link
              to="/carrito"
              className={
                btnTap === 2
                  ? "d-flex align-items-center text-decoration-none my-2 mx-5 btn btn-primary active"
                  : "d-flex align-items-center text-decoration-none my-2 mx-5 btn btn-outline-primary"
              }
              role="button"
              onClick={() => handleBtnChange(2)}
            >
              <BsCart3 />
              <div className="text-warning mx-2">{cartTotalQuantity}</div>
            </Link>
          </div>
        </div>
      </nav>
      <div className="container d-flex justify-content-around mt-4">
        <div className="mx-1">
          <Link
            to="/pizzas"
            className={
              btnTap === 3
                ? "btn btn-primary active"
                : "btn btn-outline-primary"
            }
            onClick={() => handleBtnChange(3)}
          >
            Pizzas
          </Link>
        </div>
        <div className="mx-1">
          <Link
            to="/empanadas"
            className={
              btnTap === 4
                ? "btn btn-primary active"
                : "btn btn-outline-primary"
            }
            onClick={() => handleBtnChange(4)}
          >
            Empanadas
          </Link>
        </div>
        <div className="mx-1">
          <Link
            to="/bebidas"
            className={
              btnTap === 5
                ? "btn btn-primary active"
                : "btn btn-outline-primary"
            }
            onClick={() => handleBtnChange(5)}
          >
            Bebidas
          </Link>
        </div>
        <div className="mx-1">
          <Link
            to="/postres"
            className={
              btnTap === 6
                ? "btn btn-primary active"
                : "btn btn-outline-primary"
            }
            onClick={() => handleBtnChange(6)}
          >
            Postres
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
