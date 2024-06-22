import { Link } from "react-router-dom";
import MainLogo from "../../images/mealicious-high-resolution-logo-transparent.png";
import { useState, useEffect, useContext } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const data = useContext(UserContext);

  const onlineStatus = useOnlineStatus();

  // Subscribing to store using the selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-yellow-50 sm:bg-pink-100 shadow-lg">
      <div className="logo-container p-4 ">
        <img className="w-56" src={MainLogo} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 font-medium ">
          <li className="px-4">Online Status : {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-4">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="px-4">
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to={"/cart"}>Cart ({cartItems.length} items)</Link>
          </li>
          <button
            className="login px-4"
            onClick={() => {
              btnNameReact == "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          <li className="px-4">{data.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
