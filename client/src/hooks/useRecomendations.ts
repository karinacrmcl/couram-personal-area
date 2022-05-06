import { useEffect, useState } from "react";
import axios from "axios";

export function useRecomendations() {
  const [recomendations, setRecomendations] = useState<{
    data: [];
  } | null>(null);
  useEffect(() => {
    axios
      .get(`https://couram.herokuapp.com/recomendations`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => setRecomendations(res.data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return recomendations;
}
