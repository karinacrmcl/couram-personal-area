import { Country } from "../model/country.model";

export const getCountry = async (req, res) => {
  try {
    const country = await Country.find({ id: req.query.id });
    return res.status(200).json({ status: "success", data: country });
  } catch (error) {
    console.log(error);
  }
};
