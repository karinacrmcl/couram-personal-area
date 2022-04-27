import { CronJob } from "cron";
import { db } from "../database/createConnection";
import { Country } from "../model/country.model";

export const job = new CronJob(
  "0 0 0 * * *",
  async function () {
    const countries = await Country.find({});

    const temp = await db.collection("temp");
    let response = await temp.findOne({});
    await temp.updateOne(
      { id: "countryID" },
      {
        $set: {
          currentCountryId: response
            ? response.currentCountryId <= countries.length - 1
              ? ++response.currentCountryId
              : 1
            : 1,
        },
      }
    );
  },
  null,
  true,
  "America/Los_Angeles"
);
