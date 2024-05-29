import { CDN_CARD_IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;

  return (
    <div className="m-4 p-4 w-64 h-200 rounded-lg shadow-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="res-logo w-full h-48 object-cover rounded-lg"
        alt="res-logo"
        src={CDN_CARD_IMG_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4 className="card-cuisines text-gray-600">{cuisines.join(", ")}</h4>
      <h4 className="text-yellow-600 font-semibold">{avgRating} Ratings</h4>
      <h4 className="text-gray-600">{costForTwo}</h4>
      <h4 className="text-gray-600">{sla.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
