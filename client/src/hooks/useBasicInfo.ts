import { useEffect, useState } from "react";
import { useCountries } from "./useCountries";

export function useBasicInfo(name: string) {
  const countries = useCountries();
  // const [item, setItem] = useState({});

  const item = countries.data?.find(
    (item: { name: any }) => item.name === name
  );
  return item;

  // console.log(

  //   // .filter((item: { name: any }) => item.name === "Canada")
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

  // useEffect(() => {
  //   return () => {
  //     const item = countries.data?.find(
  //       (item: { name: any }) => item.name === "Canada"
  //     );
  //     // setItem(item);
  //   };
  // }, [countries.data]);

  // return item;
}
