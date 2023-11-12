"use client";

import Card from "./components/ui/_card";
import Loading from "./components/ui/_loading";
import useCountries from "./hooks/useCountries";
import { Country } from "./types/types";
import { REGIONS } from "./utils/constants";

const Home: React.FC = () => {
  const { countries, isLoading, isError } = useCountries();

  if (isLoading) return <Loading />;
  if (isError) return <div>Error</div>;

  return (
    <main>
      <div className="mt-14 flex flex-col justify-between gap-y-2 px-5 md:container md:mx-auto md:flex-row md:px-0">
        <input
          type="text"
          id="search"
          placeholder="Search for a country..."
          className="rounded-md p-5 shadow-md"
        />
        <select className="rounded-md p-5 shadow-md">
          <option value="">Filter by Region</option>
          {REGIONS.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
      </div>
      <div className="my-14 grid grid-cols-1 gap-14 px-5 md:container md:mx-auto md:grid-cols-2 md:px-0 lg:grid-cols-4">
        {countries && countries.length > 0
          ? countries.map((country: Country) => (
              <Card
                key={country.name.common}
                name={country.name.common}
                flag={country.flags.svg}
                population={country.population}
                region={country.region}
                capital={country.capital}
              />
            ))
          : null}
      </div>
    </main>
  );
};

export default Home;
