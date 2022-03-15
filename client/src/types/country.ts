export type CountryBasicInfo = {
  name: string;
  capital: string;
  languages: Array<string>;
  totalSize: number;
  population: number;
  currencies: Array<string>;
  subregion: Array<string>;
  climate: string;
  shortDescription: string;
  coverPhoto: {
    largeUrl: string;
  };

  content: {
    facts: [{ title: string; body: string }];
    video: {
      title: string;
      url: string;
      location: string;
      previewUrl: string;
    };
  };
};
