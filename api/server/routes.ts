import * as countries from "../controllers/countries";
import * as weather from "../controllers/weather";
import * as currentCountry from "../controllers/currentCountry";
import * as recomendations from "../controllers/recomendations";

export const attachPrivateRoutes = (app: any): void => {
  app.get("/countries", countries.getCountries);
  app.get("/weather", weather.getWeather);
  app.get("/current-country", currentCountry.getCountry);
  app.get("/recomendations", recomendations.getRecomendations);
};
