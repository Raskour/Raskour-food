import { CDN_URL } from "../utils/constants";
const RestaurantCard = ({ resData }) => {
  return (
    <article>
      <img className="" src={CDN_URL + resData.cloudinaryImageId} />
      <div className="res-card-info">
        <h2 className="">{resData.name}</h2>
        <span>Food: {resData.cuisines}</span>
        <span>{resData.avgRating} ⭐</span>
        <span className="time">{resData.deliveryTime} mins</span>
      </div>
    </article>
  );
};
export default RestaurantCard;
