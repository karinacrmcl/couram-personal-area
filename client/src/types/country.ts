export type CountryBasicInfo = {
  name: string;
  id: number;
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
export type CountryFullInfo = {
  name: string;
  id: number;
  capital: string;
  languages: Array<string>;
  totalSize: number;
  population: number;
  currencies: Array<string>;
  subregion: Array<string>;
  climate: string;
  shortDescription: string;
  coordinates: {
    long: string;
    lat: string;
  };
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
    overview: {
      body: string;
    };
    gallery: {
      url: string;
      location: string;
    }[];
    history: {
      body: string;
    };
    geography: {
      body: string;
      mapsUrl: string;
    };
    economy: {
      body: string;
    };
  };
};
