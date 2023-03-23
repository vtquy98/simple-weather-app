import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useErrorHandler } from "react-error-boundary";
import { defaultLocationModel, LocationModel } from "../models";

export const useLocation = (locationName: string) => {
  const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
  const geocodeBaseUrl = process.env.REACT_APP_OPENWEATHER_GEOCODE_URL;

  const [location, setLocation] = useState<LocationModel>(defaultLocationModel);
  const handleError = useErrorHandler();

  const getCoordsByLocationName = useCallback(
    (locationName: string) => {
      axios
        .get(`${geocodeBaseUrl}?q=${locationName}&limit=1&appid=${apiKey}`)
        .then((res: any) => {
          if (res.data && res.data[0]) {
            const location = res.data[0];
            const formattedAddress = location.name;
            setLocation({
              position: {
                latitude: location.lat,
                longitude: location.lon,
              },
              locality: location.country,
              country: formattedAddress,
            });
          }
        })
        .catch((error) => {
          handleError(error);
        });
    },
    [apiKey, geocodeBaseUrl, handleError]
  );

  useEffect(() => {
    if (locationName !== "") {
      getCoordsByLocationName(locationName);
    }
  }, [getCoordsByLocationName, handleError, locationName]);

  return {
    location,
  };
};
