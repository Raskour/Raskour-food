import { CDN_URL } from "../utils/constants";
const RestaurantCard = ({ resData }) => {
  return (
    <article>
      <img className="" src={CDN_URL + resData.cloudinaryImageId} />
      <div className="res-card-info">
        <h2 className="">{resData.name}</h2>
        <strong>Food: {resData.cuisines}</strong>
        <span>{resData.avgRating} stars</span>
        <span>{resData.deliveryTime} mins</span>
      </div>
    </article>
  );
};
export default RestaurantCard;
