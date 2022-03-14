import { db } from "../database/createConnection";
import { Country } from "../model/country.model";
import { Temp } from "../model/temp.model";

export const getCountry = async (req, res) => {
  try {
    const response = await db.collection("temp").findOne({});
    // const response = await Temp.find({});
    const country = await Country.find({ id: response.currentCountryId });
    return res.status(200).json({ status: "success", data: country });
  } catch (error) {
    console.log(error);
  }
};
