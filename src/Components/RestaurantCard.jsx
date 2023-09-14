import { CDN_URL } from "../utils/constants";
const RestaurantCard = ({ resData }) => {
  return (
    <div className="m-4 p-4 w-[250px] h-[300px] bg-slate-100 rounded-lg hover:bg-gray-300 shadow-lg">
      <img className="w-full" src={CDN_URL + resData.cloudinaryImageId} />

      <h3 className="font-bold text-lg py-2">{resData.name}</h3>
      <h4>Food: {resData.cuisines}</h4>
      <h4>{resData.avgRating} stars</h4>
      <h4>{resData.deliveryTime} mins</h4>
    </div>
  );
};
export default RestaurantCard;
