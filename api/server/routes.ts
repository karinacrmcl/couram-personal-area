import * as countries from "../controllers/countries";

// export const attachPublicRoutes = (app: any): void => {
//   if (process.env.NODE_ENV === "test") {
//     app.delete("/test/reset-database", test.resetDatabase);
//     app.post("/test/create-account", test.createAccount);
//   }

//   app.post("/authentication/guest", authentication.createGuestAccount);
// };

export const attachPrivateRoutes = (app: any): void => {
  app.get("/countries", countries.getCountry);
};
