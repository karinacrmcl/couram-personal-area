import axios from "axios";
import api from "../../client/http";
import { db } from "../database/createConnection";
import { Country } from "../model/country.model";

export const getCountries = async (req, res) => {
  try {
    const countries = await Country.find({});
    return res.status(200).json({ status: "success", data: countries });
  } catch (error) {
    console.log(error);
  }
};
