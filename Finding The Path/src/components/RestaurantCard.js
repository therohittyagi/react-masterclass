import { CDN_CARD_IMG_URL } from "../utils/constants";

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
        src={CDN_CARD_IMG_URL + cloudinaryImageId}
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

export default RestaurantCard;
