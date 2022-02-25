import axios from "axios";
const apiUrl = `http://api.countrylayer.com/v2/`;

export const getCountry = async (req, res) => {
  try {
    return axios
      .get(`${apiUrl}all?access_key=${process.env.COUNTRYLAYER_API_KEY}`)
      .then((res) => console.log(res.data));
  } catch (error) {
    window.open(
      `https://stackoverflow.com/search?q=${error.message}`,
      "_blank"
    );
  }
};
