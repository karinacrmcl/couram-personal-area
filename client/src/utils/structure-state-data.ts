type StateResponse = {
  current: {
    temp_c: number;
  };
  location: {
    localtime: string;
  };
};

export function structureWeatherData(input: StateResponse) {
  const date = new Date(input?.location?.localtime.split(" ")[0])
    .toString()
    .split(" ")
    .slice(0, 3)
    .join(" ");

  const time = input?.location?.localtime.split(" ")[1];

  return { degrees: input?.current?.temp_c, date, time };
}
