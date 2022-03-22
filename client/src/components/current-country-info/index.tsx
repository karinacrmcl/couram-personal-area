import { useMediaQuery } from "react-responsive";
import { useCurrentCountryContext } from "../../context/current-country";
import { useExtendedInfoContext } from "../../context/extended-info";
import { useCityWeather } from "../../hooks/useCityWeather";
import { CardLayout } from "../../layouts/card";
import { Button } from "../../shared/components/button";
import { Favourite } from "../../shared/components/favourite";
import GlobalSelector from "../../shared/icons/svg-selector";
import { checkStoredIds, storeId } from "../../utils/local-storage";
import { structureCountryData } from "../../utils/structure-current-country";
import { structureWeatherData } from "../../utils/structure-state-data";
import s from "./country.module.scss";
import SvgSelector from "./svg-selector";
import { TransitionWrapper } from "../../shared/components/transition";

export function CurrentCountryInfo() {
  const isTablet = useMediaQuery({ maxWidth: "950px" });
  const isMobile = useMediaQuery({ maxWidth: "450px" });

  const context = useCurrentCountryContext();
  const weather = useCityWeather(context?.country.capital);

  const { countryBasicInfo, countryStats, coverPhoto } = structureCountryData(
    context.country
  );
  const { degrees, time, date } = structureWeatherData(weather);
  const { isExtendedOpen, setIsExtendedOpen, setId } = useExtendedInfoContext();

  const transitionStyles = {
    entering: { opacity: 1, zIndex: 1 },
    entered: { opacity: 1, zIndex: 1 },
    exiting: { opacity: 0, height: 0 },
    exited: { opacity: 0, zIndex: -100, height: 0 },
  };

  return (
    <div className={s.country}>
      <CardLayout
        type="large"
        bgUrl={coverPhoto.url}
        styles={{ height: isMobile ? "450px" : isTablet ? "500px" : "600px" }}
        resize={{ state: isExtendedOpen, styles: { height: "300px" } }}
      >
        <div className={s.country_container}>
          <h2 className={s.country_title}>{context.country?.name}</h2>
          <p className={s.country_description}>
            {context.country?.shortDescription}
          </p>
          <TransitionWrapper state={isExtendedOpen}>
            <div className={s.country_info}>
              {countryBasicInfo.map((item, i) => {
                return (
                  <div className={s.country_info_item} key={i}>
                    <h5>{item.label}</h5>
                    <p>{item.content}</p>
                  </div>
                );
              })}
            </div>
          </TransitionWrapper>
          <TransitionWrapper
            state={isExtendedOpen}
            styles={{ height: "100px" }}
          >
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
          </TransitionWrapper>
          <div className={s.country_shadow}></div>
        </div>
        {context.country.name && (
          <Favourite
            onClick={() => storeId(context.country.id)}
            active={checkStoredIds(context.country.id)}
          />
        )}
      </CardLayout>
      <TransitionWrapper
        state={isExtendedOpen}
        styles={{ height: "120px" }}
        transitionStyles={transitionStyles}
      >
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
            <Button
              size="large"
              onClick={() => {
                setIsExtendedOpen(true);
                setId(context?.country.id);
              }}
            >
              <GlobalSelector id="play" />
            </Button>
          </div>
        </div>
      </TransitionWrapper>
    </div>
  );
}
