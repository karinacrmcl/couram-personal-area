import axios from "axios";

export const getWeather = async (req, res) => {
  const apiUrl = "api.weatherapi.com/v1/";

  try {
    const cityName = req.params.cityName;
    // axios
    //   .get(
    //     `http://${apiUrl}current.json?key=${process.env.WEATHER_API_KEY}=${cityName}&aqi=yes`
    //   )
    //   .then((response) => {
    //     res.send(response.data);
    //   });
    res.send("ok");
  } catch (error) {
    console.log(error);
  }
};
