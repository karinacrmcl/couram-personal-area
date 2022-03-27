import axios from "axios";

export const getWeather = async (req, res) => {
  const apiUrl = "api.weatherapi.com/v1/";

  const cityName = req.query.cityName || "";
  axios
    .get(
      `http://${apiUrl}current.json?key=${process.env.WEATHER_API_KEY}&q=${cityName}&aqi=yes`
    )
    .then((response) => {
      res.send(response.data);
    })
    .catch((e) => console.log(e));
};
