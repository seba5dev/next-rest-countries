import useSWR, { SWRResponse } from "swr";
import { fetcher } from "../utils/utils";
import { Country } from "../types/types";

function useCountries(): {
  countries: Country[] | undefined;
  isLoading: boolean;
  isError: boolean;
} {
  const { data, error, isLoading }: SWRResponse<Country[], any> = useSWR(
    `https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,cca2`,
    fetcher,
  );

  return {
    countries: data,
    isLoading,
    isError: error,
  };
}

export default useCountries;
