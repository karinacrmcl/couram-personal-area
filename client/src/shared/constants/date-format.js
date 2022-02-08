const formatter = {
  weekday: "long",
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: true,
  timeZone: "UTC",
};

const date = new Date();

export const formatedDate = date.toLocaleDateString("en-US", formatter);
