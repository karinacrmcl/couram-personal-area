import { useMediaQuery } from "react-responsive";
import { useExtendedInfoContext } from "../../context/extended-info";
import { useCityWeather } from "../../hooks/useCityWeather";
import { CardLayout } from "../../layouts/card";
import { Button } from "../../shared/components/button";
import { Favourite } from "../../shared/components/favourite";
import GlobalSelector from "../../shared/icons/svg-selector";
import { checkStoredIds, storeId } from "../../utils/local-storage";
import { structureCountryData } from "../../utils/structure-current-country";
import { structureWeatherData } from "../../utils/structure-state-data";
import s from "./favourite.module.scss";
import SvgSelector from "../current-country-info/svg-selector";
import { TransitionWrapper } from "../../shared/components/transition";
import { CountryBasicInfo } from "../../types/country";

type Props = {
  item: {
    data: CountryBasicInfo[];
  };
};

export function FavouriteItem({ item }: Props) {
  const country = item.data?.[0];

  const isTablet = useMediaQuery({ maxWidth: "950px" });
  const isMobile = useMediaQuery({ maxWidth: "450px" });

  const weather = useCityWeather(country?.capital);

  const { countryBasicInfo, countryStats, coverPhoto } =
    structureCountryData(country);
  const { degrees, time, date } = structureWeatherData(weather);
  const formattedText =
    country.content.overview.body.split("").slice(0, 650).join("") + "...";
  const { isExtendedOpen, id, setIsExtendedOpen, setId } =
    useExtendedInfoContext();

  const transitionStyles = {
    entering: { opacity: 1, zIndex: 1 },
    entered: { opacity: 1, zIndex: 1 },
    exiting: { opacity: 0, height: 0 },
    exited: {
      opacity: 0,
      zIndex: -100,
      height: 0,
      display: "none",
    },
  };

  const isSelected = isExtendedOpen ? id === country.id : true;

  return (
    <TransitionWrapper
      duration={200}
      state={!isSelected}
      transitionStyles={transitionStyles}
    >
      <div className={s.favourite}>
        <CardLayout
          type="large"
          bgUrl={coverPhoto.url}
          styles={{ height: isMobile ? "450px" : isTablet ? "500px" : "600px" }}
          resize={{
            state: isExtendedOpen,
            styles: { height: isSelected ? "300px" : "0px" },
          }}
        >
          <div className={s.favourite_container}>
            <h2 className={s.favourite_title}>{country?.name}</h2>

            <TransitionWrapper state={isExtendedOpen}>
              <div className={s.favourite_content}>
                <div className={s.favourite_info}>
                  {countryBasicInfo.map((item, i) => {
                    return (
                      <div className={s.favourite_info_item} key={i}>
                        <h5>{item.label}</h5>
                        <p>{item.content}</p>
                      </div>
                    );
                  })}
                  <div className={s.favourite_state}>
                    <div className={s.favourite_state_item}>
                      <p>Temperature</p>
                      <h3>{degrees}°C</h3>
                    </div>
                    <hr />
                    <div className={s.favourite_state_item}>
                      <p>{date}</p>
                      <h3>{time}</h3>
                    </div>
                  </div>
                </div>

                <div className={s.favourite_text}>{formattedText}</div>
              </div>
            </TransitionWrapper>

            <div className={s.favourite_shadow}></div>
          </div>
          {country.name && (
            <Favourite
              onClick={() => storeId(country.id)}
              active={checkStoredIds(country.id)}
            />
          )}
        </CardLayout>
        <TransitionWrapper
          state={isExtendedOpen}
          styles={{ height: "120px" }}
          transitionStyles={transitionStyles}
        >
          <div className={s.favourite_bottom}>
            <div className={s.favourite_start}>
              <Button
                size="large"
                onClick={() => {
                  setIsExtendedOpen(true);
                  setId(country?.id);
                }}
              >
                <GlobalSelector id="play" />
              </Button>
            </div>
          </div>
        </TransitionWrapper>
      </div>
    </TransitionWrapper>
  );
}
