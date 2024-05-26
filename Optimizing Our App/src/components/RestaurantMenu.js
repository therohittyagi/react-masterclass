import useRestrauntMenu from "../utils/useRestrauntMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestrauntMenu(resId);

  console.log("resInfo", resInfo);

  if (resInfo == null) {
    return <Shimmer />;
  }

  const { name, costForTwoMessage, cloudinaryImageId, cuisines } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log("itemCards", itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      {/* <image /> */}
      <p>
        {cuisines.join(",")}- {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} - {" RS "}
            {item?.card?.info?.price / 100 ||
              item?.card?.info?.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
