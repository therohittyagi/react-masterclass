import { Link } from "react-router-dom";
import MainLogo from "../../images/mealicious-high-resolution-logo-transparent.png";
import { useState, useEffect } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  useEffect(() => {
    console.log("UseEffect is called");
  }, [btnNameReact]);

  const onlineStatus = useOnlineStatus();
  console.log("Header render");

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
          <li className="px-4">Cart</li>
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
