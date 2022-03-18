import * as countries from "../controllers/countries";
import * as weather from "../controllers/weather";
import * as currentCountry from "../controllers/currentCountry";
import * as recomendations from "../controllers/recomendations";
import * as country from "../controllers/country";

export const attachPrivateRoutes = (app: any): void => {
  app.get("/countries", countries.getCountries);
  app.get("/weather", weather.getWeather);
  app.get("/current-country", currentCountry.getCurrentCountry);
  app.get("/recomendations", recomendations.getRecomendations);
  app.get("/country", country.getCountry);
};
