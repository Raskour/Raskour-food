import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch("http://localhost:3000/api/restaurants");
    const data = await res.json(); // deserialising using json()

    setRestaurantList(data);
    setFilteredResList(data);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return <h1>Looks like you are offline!! Check your internet connection</h1>;

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div>
        <div>
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <button
            onClick={() => {
              const filteredRes = restaurantList.filter((res) =>
                res.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredResList(filteredRes);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              const filteredList = restaurantList.filter(
                (res) => res.avgRating > 4
              );
              setFilteredResList(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <div>
        {filteredResList.map((res) => (
          <Link key={res.id} to={"/restaurants/" + res.id}>
            <RestaurantCard resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
