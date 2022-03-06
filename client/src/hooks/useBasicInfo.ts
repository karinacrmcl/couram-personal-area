import { useCountries } from "./useCountries";

export function useBasicInfo(name: string) {
  const country = useCountries();
  console.log(country);
}
