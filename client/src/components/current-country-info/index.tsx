import { useMediaQuery } from "react-responsive";
import { useCurrentCountryContext } from "../../context/current-country";
import { useCityWeather } from "../../hooks/useCityWeather";
import { CardLayout } from "../../layouts/card";
import { Button } from "../../shared/components/button";
import { Favourite } from "../../shared/components/favourite";
import GlobalSelector from "../../shared/icons/svg-selector";
import { structureCountryData } from "../../utils/structure-current-country";
import { structureWeatherData } from "../../utils/structure-state-data";
import s from "./country.module.scss";
import SvgSelector from "./svg-selector";

export function CurrentCountryInfo() {
  const isTablet = useMediaQuery({ maxWidth: "950px" });
  const isMobile = useMediaQuery({ maxWidth: "450px" });

  const context = useCurrentCountryContext();
  const weather = useCityWeather(context?.country.capital);
  const { countryBasicInfo, countryStats, coverPhoto } = structureCountryData(
    context.country
  );

  const { degrees, time, date } = structureWeatherData(weather);

  return (
    <div className={s.country}>
      <CardLayout
        type="large"
        bgUrl={coverPhoto.url}
        styles={{ height: isMobile ? "450px" : isTablet ? "500px" : "600px" }}
      >
        <div className={s.country_container}>
          <h2 className={s.country_title}>{context.country?.name}</h2>
          <p className={s.country_description}>
            {context.country?.shortDescription}
          </p>

          <div className={s.country_info}>
            {countryBasicInfo.map((item, i) => {
              return (
                <div className={s.country_info_item} key={i}>
                  <h5>{item.title}</h5>
                  <p>{item.content}</p>
                </div>
              );
            })}
          </div>

          <div className={s.country_state}>
            <div className={s.country_state_item}>
              <p>Temperature</p>
              <h3>{degrees}°C</h3>
            </div>
            <hr />
            <div className={s.country_state_item}>
              <p>{date}</p>
              <h3>{time}</h3>
            </div>
          </div>

          <div className={s.country_shadow}></div>
        </div>
        <Favourite active={false} onClick={() => console.log()} />
      </CardLayout>
      <div className={s.country_bottom}>
        <div className={s.country_stats}>
          {countryStats.map((item, i) => {
            return (
              <div className={s.country_stats_item} key={i}>
                <SvgSelector id={item.iconId} />
                <p>{item.content}</p>
              </div>
            );
          })}
        </div>
        <div className={s.country_start}>
          <div className={s.country_start_text}>
            <p>Start exploring</p>
            <h3>{context.country?.name}</h3>
          </div>
          <Button size="large">
            <GlobalSelector id="play" />
          </Button>
        </div>
      </div>{" "}
      {/* */}
    </div>
  );
}
