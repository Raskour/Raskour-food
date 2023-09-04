import {CDN_URL} from "../utils/constants"
const RestaurantCard = ({resData}) => {
  
    return (
    <div className="res-card">
      <img
        className="res-logo"
        src={
          CDN_URL + resData.data.data.cloudinaryImageId
    }
        />
       
      <h3>{resData.data.data.name}</h3>
      <h4>Food: {resData.data.data.cuisines}</h4>
      <h4>{resData.data.data.avgRating} stars</h4>
      <h4>{resData.data.data.deliveryTime} mins</h4>
    </div>
  );
};
export default RestaurantCard;