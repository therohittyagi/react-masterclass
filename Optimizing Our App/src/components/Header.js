import { Link } from "react-router-dom";
import MainLogo from "../../images/mealicious-high-resolution-logo-transparent.png";
import { useState, useEffect } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  // let btnName = "Login";
  const [btnNameReact, setBtnNameReact] = useState("Login");

  // if no dependency array => useEffect is called on every render
  // if dependency array is empty = [] => useEffect is called on initial render(just once)
  // if dependency array is empty = [btnNameReact] => useEffect is called everytime btnNameReact is updated

  useEffect(() => {
    console.log("UseEffect is called");
  }, [btnNameReact]);


  const onlineStatus = useOnlineStatus()
  console.log("Header render");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={MainLogo} />
      </div>
      <div className="nav-items">
        <ul>
        <li>
          Online Status : {onlineStatus ? "✅" : "🔴"}
        </li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            {/* <a href="/about">About Us</a> */}
            <Link to={"/about"}>About Us</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li>
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              // btnName = "Logout";
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

export default Header; //exported header from the file
