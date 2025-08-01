import { useContext, useEffect, useState } from "react";
import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";
import { WeatherContext } from "./context";

import ClearSkyImage from "../src/assets/backgrounds/clear-sky.jpg";
import FewCloudsImage from "../src/assets/backgrounds/few-clouds.jpg";
import MistImage from "../src/assets/backgrounds/mist.jpeg";
import RainyDayImage from "../src/assets/backgrounds/rainy-day.jpg";
import ScatteredClodsImage from "../src/assets/backgrounds/scattered-clouds.jpg";
import ShowerRainImage from "../src/assets/backgrounds/shower-rain.jpg";
import SnowImage from "../src/assets/backgrounds/snow.jpg";
import SunnyImage from "../src/assets/backgrounds/sunny.jpg";
import ThunderStormImage from "../src/assets/backgrounds/thunderstorm.jpg";
import WinterImage from "../src/assets/backgrounds/winter.jpg";

const Page = () => {
  const { weatherData, isLoading } = useContext(WeatherContext);
  const [climateImage, setClimateImage] = useState("");

  function getBackgroundImage(climate) {
    switch (climate) {
      case "Rain":
        return RainyDayImage;
      case "Clouds":
        return ScatteredClodsImage;
      case "Clear":
        return SunnyImage;
      case "Snow":
        return SnowImage;
      case "Thunder":
        return ThunderStormImage;
      case "Mist":
        return MistImage;
      default:
        return ClearSkyImage;
    }
  }

  useEffect(() => {
    const bgImage = getBackgroundImage(weatherData.climate);
    setClimateImage(bgImage);
  }, [weatherData.climate]);
  return (
    <>
      {isLoading.status ? (
        <dir>
          <p>{isLoading.message}</p>
        </dir>
      ) : (
        <div
          style={{ backgroundImage: `url('${climateImage}')` }}
          className="grid h-screen place-items-center bg-no-repeat bg-cover"
        >
          <Header />
          <main>
            <section>
              <WeatherBoard />
            </section>
          </main>
        </div>
      )}
    </>
  );
};

export default Page;
