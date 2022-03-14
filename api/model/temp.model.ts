import { Schema, model, Document } from "mongoose";

export interface TempModel {
  id: string;
  currentCountryId: number;
}

type TempModelDocument = TempModel & Document;

const TempSchema = new Schema<TempModel & Document>({
  id: {
    type: String,
  },
  currentCountryId: {
    type: Number,
  },
});

export const Temp = model<TempModelDocument>("Temp", TempSchema);
