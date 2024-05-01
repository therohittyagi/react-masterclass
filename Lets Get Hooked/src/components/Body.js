import RestaurantCard from "./RestaurantCard";
import restList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // Local State Variable - super powerful variable by using useState Hook
  const [listOfRestaurants, setListOfRestaurants] = useState(restList);

  // Normal js variable
  //   let data = restList;
  return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="filter">
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

        {listOfRestaurants.map((restaurant, index) => (
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

export default Body;
