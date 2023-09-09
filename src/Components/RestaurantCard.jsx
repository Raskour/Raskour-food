import {CDN_URL} from "../utils/constants"
const RestaurantCard = ({resData}) => {
  
    return (
    <div className="m-4 p-4 w-[250px] bg-slate-100 rounded-lg hover:bg-gray-300">
      <img
        className="res-logo"
        src={
          CDN_URL + resData.data.data.cloudinaryImageId
    }
        />
       
      <h3 className = "font-bold text-lg py-2">{resData.data.data.name}</h3>
      <h4>Food: {resData.data.data.cuisines}</h4>
      <h4>{resData.data.data.avgRating} stars</h4>
      <h4>{resData.data.data.deliveryTime} mins</h4>
    </div>
  );
};
export default RestaurantCard;