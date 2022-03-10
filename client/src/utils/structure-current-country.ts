import { CountryBasicInfo } from "../types/country";

export function structureData(input: CountryBasicInfo) {
  const countryBasicInfo = [
    { title: "Capital", index: "capital", content: input?.capital },
    {
      title: "Language",
      index: "language",
      content: input?.languages[0],
    },
    {
      title: "Total size",
      index: "total_size",
      content: `${input?.totalSize} km² `,
    },
  ];

  const countryStats = [
    {
      iconId: "popualtion",
      index: "popualtion",
      content: input?.population,
    },
    {
      iconId: "currency",
      index: "currency",
      content: input?.currencies[0],
    },
    {
      iconId: "location",
      index: "location",
      content: input?.subregion,
    },
    {
      iconId: "climate",
      index: "climate",
      content: input?.climate,
    },
  ];

  const factsContent = [
    {
      name: "Situation",
      value:
        "Liechtenstein is situated in the Upper Rhine valley of the European Alps.",
      key: 1,
    },
    {
      name: "Location",
      value:
        "Liechtenstein lies on the east bank of the Rhine River south of Lake Constance between Austria and Switzerland. It consists of low valley land and Alpine peaks.",
      key: 2,
    },
  ];
  const coverPhoto = {
    url: input?.coverPhoto.largeUrl,
  };
  return { countryBasicInfo, countryStats, factsContent, coverPhoto };
}
