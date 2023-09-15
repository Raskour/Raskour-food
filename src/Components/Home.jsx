import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Home = () => {
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
        <form role="search">
          <label className="sr-only" htmlFor="search">
            Search Restaurant:
          </label>
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            id="search"
            autoComplete="true"
          />
          <button
            onClick={(event) => {
              event.preventDefault();
              const filteredRes = restaurantList.filter((res) =>
                res.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredResList(filteredRes);
            }}
          >
            Search
          </button>
        </form>
        <h1 id="res-syd">Restaurants in Sydney</h1>
        <div>
          <button
            className="secondary_btn"
            onClick={() => {
              const filteredList = restaurantList.filter(
                (res) => res.avgRating > 4
              );
              setFilteredResList(filteredList);
            }}
          >
            Top Restaurants
          </button>
        </div>
      </div>

      <ul className="res_container" aria-labelledby="res-syd">
        {filteredResList.map((res) => (
          <li key={res.id}>
            <Link to={"/restaurants/" + res.id}>
              <RestaurantCard resData={res} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Home;
