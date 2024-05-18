import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Body = () => {
  // Local State Variable - super powerful variable by using useState Hook
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    console.log("useEfeect called");
    fetchData();
  }, []);

  const fetchData = async () => {
    // for build
    // const data = await fetch(
    //   "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    // );
    // for development
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setListOfRestaurants(
      // optional Chaining
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    console.log(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  console.log("Body rendered");

  // Conditinal rendering
  // if(listOfRestaurants == 0){
  //   return <Shimmer/>
  // }

  return listOfRestaurants == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            value={searchText}
          />
          <button
            onClick={() => {
              console.log(searchText);
              // filter the retraunt cards and update the UI
              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            console.log("Button Clicked");
            let filterList = listOfRestaurants.filter(
              (item) => item.info.avgRating > 4
            );
            setListOfRestaurants(filterList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
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

        {filteredRestaurant?.map((restaurant, index) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard
              // key={index}
              resData={restaurant}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
