import React, { useContext } from "react";
import { LOGO_URL } from "../Utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineOfflineStatus from "../Utils/useOnlineOfflineStatus";
import UserContext from "../Utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [isLoggedIn, setIsLoggedOut] = useState("LogIn");
  const onlineStatus = useOnlineOfflineStatus();

  const { loggedInUser } = useContext(UserContext);
  //Selector
  const cartItems = useSelector((cartItems) => cartItems.cart.productsInCart);
  return (
    <div className="flex justify-between shadow-lg px-4 py-2 bg-slate-100">
      <div className="logo-container">
        <img className="w-40 h-auto" src={LOGO_URL} alt="" />
      </div>
      <nav className="flex items-center space-x-6">
        <ul className="flex p-10 m-2  ">
          <li className="px-5 hover:bg-slate-50">
            {" "}
            Status : {onlineStatus ? " Online" : " Offline"}
          </li>
          <li className="px-2 hover:bg-gray-200 ">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2 hover:bg-gray-200">
            <Link to="/about"> About US</Link>
          </li>
          <li className="px-2 hover:bg-gray-200">
            <Link to="/contact">Contact US</Link>
          </li>
          <li className="px-2 hover:bg-gray-200">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="font-bold text-xl px-2 hover:bg-gray-200">
            <Link to="/cart">Cart {cartItems.length} items</Link>
          </li>
          <button
            className="px-3 hover:bg-gray-200"
            onClick={() => {
              isLoggedIn === "LogIn"
                ? setIsLoggedOut("LogOut")
                : setIsLoggedOut("LogIn");
            }}
          >
            {isLoggedIn}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
