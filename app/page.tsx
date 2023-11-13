"use client";

import { useCallback, useEffect, useState } from "react";
import Card from "./components/ui/_card";
import Loading from "./components/ui/_loading";
import useCountries from "./hooks/swr/useCountries";
import { Country } from "./types/types";
import { REGIONS } from "./utils/constants";
import { FaSearch } from "react-icons/fa";

const Home: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [region, setRegion] = useState<string>("");
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);

  const { countries, isLoading, isError } = useCountries();

  const filterCountries = useCallback(() => {
    let filtered = countries;

    // Filtrar por búsqueda
    if (search) {
      const searchTerm = search.toLowerCase();
      filtered = filtered
        ? filtered.filter((country) =>
            country.name.common.toLowerCase().includes(searchTerm),
          )
        : [];
    }

    // Filtrar por región
    if (region) {
      filtered = filtered
        ? filtered.filter((country) => country.region === region)
        : [];
    }

    setFilteredCountries(filtered || []);
  }, [countries, search, region]);

  // Manejar cambios en la búsqueda y la región
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRegion(e.target.value);
  };

  // Aplicar filtros cuando cambien la búsqueda o la región
  useEffect(() => {
    filterCountries();
  }, [filterCountries]);

  if (isLoading) return <Loading />;
  if (isError) return <div>Error</div>;

  return (
    <>
      <div className="mt-8 flex flex-col justify-between gap-y-10 px-5 md:container md:mx-auto md:mt-14 md:flex-row md:gap-y-2 md:px-0">
        <div className="flex w-full items-center rounded-md bg-white pl-6 text-darkGray shadow-md dark:bg-darkBlue dark:text-white md:w-1/3">
          <FaSearch />
          <input
            type="text"
            id="search"
            placeholder="Search for a country..."
            className="w-full rounded-md bg-white p-5 placeholder:text-darkGray dark:bg-darkBlue dark:text-white dark:placeholder:text-white"
            onChange={handleSearchChange}
          />
        </div>
        <select
          className="rounded-md bg-white p-5 shadow-md dark:bg-darkBlue dark:text-white w-60"
          onChange={handleRegionChange}
        >
          <option value="">Filter by Region</option>
          {REGIONS.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-14 px-12 md:container md:mx-auto md:my-14 md:grid-cols-3 md:px-0 xl:grid-cols-4">
        {countries && filteredCountries
          ? filteredCountries.map((country: Country) => (
              <Card
                key={country.name.common}
                name={country.name}
                flags={country.flags}
                population={country.population}
                region={country.region}
                capital={country.capital}
                cca2={country.cca2}
              />
            ))
          : countries && countries.length > 0
          ? countries.map((country: Country) => (
              <Card
                key={country.name.common}
                name={country.name}
                flags={country.flags}
                population={country.population}
                region={country.region}
                capital={country.capital}
                cca2={country.cca2}
              />
            ))
          : null}
      </div>
    </>
  );
};

export default Home;
