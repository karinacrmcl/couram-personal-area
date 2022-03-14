import { Country } from "../model/country.model";

export const getRecomendations = async (req, res) => {
  try {
    const recomendations = await Country.aggregate([{ $sample: { size: 5 } }]);
    return res.status(200).json({ status: "success", data: recomendations });
  } catch (error) {
    console.log(error);
  }
};
