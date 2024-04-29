import React from "react";
import ReactDOM from "react-dom/client";
import MainLogo from "./images/mealicious-high-resolution-logo-transparent.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={MainLogo} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// const styleCard = {
//   backgroundColor : '#f0f0f0'
// }

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info; //optional Chaining

  return (
    // <div className="res-card" style={styleCard}>
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
          cloudinaryImageId
        }
      />
      <div className="res-card-content">
        <h3>{name}</h3>
        <h4 className="card-cuisines">{cuisines.join(", ")}</h4>
        <h4>{avgRating} Ratings</h4>
        <h4>{costForTwo} </h4>
        <h4>{sla.slaString}</h4>
      </div>
    </div>
  );
};

const restList = [
  {
    info: {
      id: "691733",
      name: "Chinese Wok",
      cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
      costForTwo: "₹250 for two",
      cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
      avgRating: 4.2,
      avgRatingString: "4.2",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 3.6,
        serviceability: "SERVICEABLE",
        slaString: "31 mins",
        lastMileTravelString: "3.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },
  {
    info: {
      id: "280465",
      name: "Bikanervala",
      cloudinaryImageId: "rwks2yva4dbppsekgw6a",
      costForTwo: "₹300 for two",
      cuisines: ["North Indian"],
      avgRating: 4.5,
      avgRatingString: "4.5",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 5.7,
        serviceability: "SERVICEABLE",
        slaString: "24 mins",
        lastMileTravelString: "5.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },
  {
    info: {
      id: "798567",
      name: "Chicago pizza",
      cloudinaryImageId: "4f9afba9112485d52b7c706ff07d0b97",
      costForTwo: "₹300 for two",
      cuisines: ["Pizzas", "Pastas"],
      avgRating: 3.9,
      avgRatingString: "3.9",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "26 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },
  {
    info: {
      id: "350707",
      name: "Monginis",
      cloudinaryImageId: "zaje9twchacwlhdbh6hk",
      costForTwo: "₹250 for two",
      cuisines: ["Bakery", "Desserts"],
      avgRating: 4.4,
      avgRatingString: "4.4",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 6.7,
        serviceability: "SERVICEABLE",
        slaString: "28 mins",
        lastMileTravelString: "6.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },
  {
    info: {
      id: "411450",
      name: "KFC",
      cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      avgRating: 4.2,
      avgRatingString: "4.2",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 3.6,
        serviceability: "SERVICEABLE",
        slaString: "24 mins",
        lastMileTravelString: "3.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },
  {
    info: {
      id: "611107",
      name: "Burger King",
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      costForTwo: "₹350 for two",
      cuisines: ["American"],
      avgRating: 4.2,
      avgRatingString: "4.2",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 3.6,
        serviceability: "SERVICEABLE",
        slaString: "32 mins",
        lastMileTravelString: "3.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },
  {
    info: {
      id: "253765",
      name: "McDonald's",
      cloudinaryImageId: "535fc9f9c135f7982317bbb6a64a1ffc",
      costForTwo: "₹400 for two",
      cuisines: ["American"],
      avgRating: 4.3,
      avgRatingString: "4.3",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 1.8,
        serviceability: "SERVICEABLE",
        slaString: "23 mins",
        lastMileTravelString: "1.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },
  {
    info: {
      id: "38925",
      name: "Domino's Pizza",
      cloudinaryImageId: "mdl4tnyc8wbvysqxzhnq",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.2,
      avgRatingString: "4.2",
      sla: {
        deliveryTime: 25,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },
  {
    info: {
      id: "417161",
      name: "Rominus Pizza And Burger",
      cloudinaryImageId: "9ec9ffd900c24ef751e2f34ba3d2fd4b",
      costForTwo: "₹150 for two",
      cuisines: [
        "Pizzas",
        "Italian",
        "American",
        "Snacks",
        "Desserts",
        "Beverages",
        "Italian-American",
      ],
      avgRating: 4.2,
      avgRatingString: "4.2",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 7.5,
        serviceability: "SERVICEABLE",
        slaString: "35 mins",
        lastMileTravelString: "7.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {/* <RestaurantCard
          resName="Dubey Foods"
          cusine="Momos , Chinese , Asian"
          ratings="4.4"
          time="38 mins"
        /> */}
        {/* <RestaurantCard resData={restList[0]} />
        <RestaurantCard resData={restList[1]} />
        <RestaurantCard resData={restList[2]} />
        <RestaurantCard resData={restList[3]} />
        <RestaurantCard resData={restList[4]} />
        <RestaurantCard resData={restList[5]} />
        <RestaurantCard resData={restList[6]} />
        <RestaurantCard resData={restList[7]} />
        <RestaurantCard resData={restList[8]} /> */}

        {restList.map((restaurant, index) => (
          <RestaurantCard
            // key={index}
            key={restaurant.info.id}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);