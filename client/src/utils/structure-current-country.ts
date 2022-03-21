import { CountryBasicInfo } from "../types/country";

export function structureCountryData(input: CountryBasicInfo) {
  const countryBasicInfo = [
    { label: "Capital", iconId: "capital", content: input?.capital },
    {
      label: "Language",
      iconId: "language",
      content: input?.languages?.[0],
    },
    {
      label: "Total size",
      iconId: "total_size",
      content: `${input?.totalSize} km² `,
    },
  ];

  const countryStats = [
    {
      iconId: "popualtion",
      label: "popualtion",
      content: input?.population,
    },
    {
      iconId: "currency",
      label: "currency",
      content: input?.currencies?.[0],
    },
    {
      iconId: "location",
      label: "location",
      content: input?.subregion,
    },
    {
      iconId: "climate",
      label: "climate",
      content: input?.climate,
    },
  ];

  const factsContent = input?.content?.facts;
  const coverPhoto = {
    url: input?.coverPhoto?.largeUrl,
  };
  return { countryBasicInfo, countryStats, coverPhoto, factsContent };
}
