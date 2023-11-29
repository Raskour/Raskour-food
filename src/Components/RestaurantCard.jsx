import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { addFav } from "../utils/favSlice";

import { HeartIcon } from "../commons/icons";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const dispatch = useDispatch(); // this is a hook

  const handleAddFav = (e) => {
    console.log("adding to fav");
    e.stopPropagation();
    e.preventDefault();
    dispatch(addFav(resData));
    toast.success("Item has been added to your favourites!");
  };

  return (
    <article>
      <img src={CDN_URL + resData.cloudinaryImageId} width={308} height={194} />
      <div className="res-card-info">
        <div>
          <h2 className="">{resData.name}</h2>
          <button
            className="icon-btn"
            aria-labelledby="add-to-fav"
            onClick={handleAddFav}
          >
            <HeartIcon />
            <span hidden id="add-to-fav">
              Add to favourites
            </span>
          </button>
        </div>
        <span>Food: {resData.cuisines}</span>
        <span>{resData.avgRating} ⭐</span>
        <span className="time">{resData.deliveryTime} mins</span>
      </div>
    </article>
  );
};
export default RestaurantCard;
