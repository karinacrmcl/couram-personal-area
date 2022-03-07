import { useEffect, useState } from "react";
import { useCountries } from "./useCountries";

export function useBasicInfo(name: string) {
  const countries = useCountries();
  const [item, setItem] = useState({});
  // console.log(
  //   countries.data?.filter((item: { name: any }) => item.name === name)
  // );
  // useEffect(() => {
  //   return () => {
  //     const country = countries?.data?.filter((item: { name: string }) => {
  //       console.log(item);
  //       return item.name === name;
  //     });
  //     setItem(country);
  //   };
  // }, [name]);

  useEffect(() => {
    return () => {
      console.log(
        countries.data.filter((item: { name: any }) => item.name === name)
      );
    };
  }, [countries]);

  return item;
}
