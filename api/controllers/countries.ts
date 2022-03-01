import axios from "axios";
const apiUrl = `http://api.countrylayer.com/v2/`;

export const getCountries = async (req, res) => {
  axios
    .get(`${apiUrl}all?access_key=${process.env.COUNTRYLAYER_API_KEY}`)
    .then((response) => {
      res.send(response.data);
    });
};
