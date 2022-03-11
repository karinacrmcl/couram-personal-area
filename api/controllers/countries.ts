import { Country } from "../model/country.model";

export const getCountries = async (req, res) => {
  try {
    const countries = await Country.find({});
    return res.status(200).json({ status: "success", data: countries });
  } catch (error) {
    console.log(error);
  }
};
