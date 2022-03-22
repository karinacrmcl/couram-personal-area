import { cron, CronJob } from "cron";
import { db } from "../database/createConnection";
import { Country } from "../model/country.model";

export const job = new CronJob(
  "0 */2 * * *", //every 6 hours
  // 0 0 0 * * * every midnight
  async function () {
    const countries = await Country.find({});

    const temp = await db.collection("temp");
    let response = await temp.findOne({});
    await temp.updateOne(
      { id: "countryID" },
      {
        $set: {
          currentCountryId:
            response.currentCountryId <= countries.length - 1
              ? ++response.currentCountryId
              : 1,
        },
      }
    );
  },
  null,
  true,
  "America/Los_Angeles"
);
