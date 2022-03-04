import { Schema, model, Document } from "mongoose";

export interface CountryModel {
  id: number;
  name: string;
  shortDescription: string;
  languages: Array<string>;
  totalSize: number;
  population: number;
  currencies: Array<string>;
  subregion: string;
  coordinates: {
    long: string;
    lat: string;
  };
  climate: string;
  coverPhoto: {
    smallUrl: string;
    largeUrl: string;
  };
  content: {
    facts: Array<{ title: string; body: string }>;
    video: {
      title: string;
      url: string;
      location: string;
    };
    overview: {
      body: string;
    };
    gallery: Array<{ url: string; location: string }>;
    history: {
      body: string;
    };
    geography: { body: string; mapsUrl: string };
    economy: {
      body: string;
    };
  };
}

type IGoodModelDocument = CountryModel & Document;

const CountrySchema = new Schema<CountryModel & Document>({
  id: {
    type: Number,
  },
  name: {
    type: String,
    required: true,
  },
  shortDescription: {
    type: String,
    required: true,
  },
  subregion: {
    type: String,
    required: true,
  },
  climate: {
    type: String,
    required: true,
  },
  languages: {
    type: [String],
    required: true,
  },
  coordinates: {
    long: String,
    lat: String,
  },
  coverPhoto: {
    smallUrl: String,
    largeUrl: String,
  },
  currencies: {
    type: [String],
    required: true,
  },
  totalSize: {
    type: Number,
    required: true,
  },
  population: {
    type: Number,
    required: true,
  },
  content: {
    facts: [{ title: String, body: String }],
    video: {
      title: String,
      url: String,
      location: String,
    },
    overview: {
      body: String,
    },
    gallery: [{ url: String, location: String }],
    history: {
      body: String,
    },
    geography: { body: String, mapsUrl: String },
    economy: {
      body: String,
    },
  },
});

export const Country = model<IGoodModelDocument>("Country", CountrySchema);
