import useSWR, { SWRResponse } from "swr";
import { fetcher } from "../../utils/utils";
import { Country } from "../../types/types";

const useCountry = ({
  code,
}: {
  code: string;
}): {
  country: Country | undefined;
  isLoading: boolean;
  isError: boolean;
} => {
  const { data, error, isLoading }: SWRResponse<Country, any> = useSWR(
    `https://restcountries.com/v3.1/alpha/${code}?fields=name,tld,cca2,currencies,capital,region,subregion,languages,population,flags,borders`,
    fetcher,
  );

  return {
    country: data,
    isLoading,
    isError: error,
  };
};

export default useCountry;
