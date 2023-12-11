import { formatJSONResponse, notFoundResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";

import { generatedCityData as cityData, CityData } from "./citydata";

const cityinfo = async (event) => {
  const city = event.pathParameters?.city;

  if (!city || !cityData.find((data) => data.name === city)) {
    return notFoundResponse({
      message: "Missing city or no data for that city",
    });
  }

  const cityDetails: CityData | undefined = cityData.find(
    (data) => data.name === city
  );

  if (!cityDetails) {
    return notFoundResponse({
      message: "No details found for the specified city",
    });
  }

  return formatJSONResponse({
    message: cityDetails,
    event,
  });
};

export const main = middyfy(cityinfo);
