import { useContext, useEffect, useState } from "react";
import HeartIcon from "../../assets/heart.svg";
import RedHeartIcon from "../../assets/heart-red.svg";
import { FavoriteContext, WeatherContext } from "../../context";

const AddToFavorite = () => {
  const { favorites, addToFavorite, removeToFavorite } =
    useContext(FavoriteContext);
  const [isFavorite, toggleIsFavorite] = useState(false);
  const { weatherData } = useContext(WeatherContext);
  const { latitude, longitude, location } = weatherData;

  useEffect(() => {
    const found = favorites.find((fav) => fav.location === location);
    toggleIsFavorite(found);
  }, []);

  function handleFavorite() {
    const found = favorites.find((fav) => fav.location === location);
    if (!found) {
      addToFavorite(latitude, longitude, location);
    } else {
      removeToFavorite(location);
    }
    toggleIsFavorite(!isFavorite);
  }
  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
          onClick={handleFavorite}
        >
          <span>Add to Favorite</span>
          <img src={isFavorite ? RedHeartIcon : HeartIcon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default AddToFavorite;
