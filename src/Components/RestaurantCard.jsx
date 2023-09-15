import { CDN_URL } from "../utils/constants";
const RestaurantCard = ({ resData }) => {
  return (
    <div className="">
      <img className="" src={CDN_URL + resData.cloudinaryImageId} />

      <h3 className="">{resData.name}</h3>
      <h4>Food: {resData.cuisines}</h4>
      <h4>{resData.avgRating} stars</h4>
      <h4>{resData.deliveryTime} mins</h4>
    </div>
  );
};
export default RestaurantCard;
