import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsCart3 } from "react-icons/bs";
import styleNav from '../style/navButtons.module.css'
import styleNavBar from '../style/navBar.module.css'

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
      <nav className={styleNavBar.nav}>
          <Link
            to="/pizzas"
            className={styleNav.buttonNavPizza}
            onClick={() => handleBtnChange(3)}
          >
           <span> pizzas</span>
          </Link>
     
     
          <Link
            to="/empanadas"
           className={styleNav.buttonNavEmpanada}
           onClick={() => handleBtnChange(4)}
          >
           <span> Empanadas</span>
          </Link>
     
       
          <Link
            to="/bebidas"
            className={styleNav.buttonNavBebidas}
            onClick={() => handleBtnChange(5)}
            >
           <span> Bebidas</span>
          </Link>
  
       
          <Link
            to="/postres"
            className={styleNav.buttonNavPostre}
            onClick={() => handleBtnChange(6)}
            >
             <span>Postres</span>
          </Link>
      
          </nav>
    </div>
  );
};

export default Navbar;
