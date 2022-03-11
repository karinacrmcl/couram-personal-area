import * as countries from "../controllers/countries";
import * as weather from "../controllers/weather";

export const attachPrivateRoutes = (app: any): void => {
  app.get("/countries", countries.getCountries);
  app.get("/weather", weather.getWeather);
};
