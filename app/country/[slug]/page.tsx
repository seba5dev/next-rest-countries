"use client";

import Button from "@/app/components/ui/_buttons";
import Loading from "@/app/components/ui/_loading";
import useCountry from "@/app/hooks/swr/useCountry";
import { addThousands } from "@/app/utils/utils";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";

const Page = ({ params }: { params: { slug: string } }) => {
  const { country, isLoading, isError } = useCountry({ code: params.slug });

  if (isLoading) return <Loading />;
  if (isError) return <div>Error</div>;

  if (country?.status === 400)
    return (
      <>
        <div className="flex flex-col px-5 py-12 text-base md:container md:mx-auto md:px-0">
          <div className="grid grid-cols-3 lg:grid-cols-8">
            <Button href="/">
              <FaArrowLeft/>
              Back
            </Button>
          </div>
          <div className="my-10 text-center text-2xl font-bold text-darkGray dark:text-white">
            Country not found
          </div>
        </div>
      </>
    );

  return (
    <>
      <div className="flex flex-col px-5 py-12 text-base md:container md:mx-auto md:px-0">
        <div className="grid grid-cols-3 lg:grid-cols-8">
          <Button href="/">
            <FaArrowLeft />
            Back
          </Button>
        </div>
        {country ? (
          <div className="my-14 lg:grid lg:grid-cols-2 lg:gap-x-28">
            <div className="relative h-52 w-full md:h-96 lg:h-96 lg:w-auto lg:px-10">
              <Image
                src={country?.flags?.svg}
                alt={country?.flags?.alt}
                fill
                objectFit="cover"
                className="shadow-md"
              />
            </div>
            <div className="lg:grid lg:grid-cols-2 lg:align-top">
              <h1 className="my-10 text-xl font-bold lg:col-span-2 lg:text-2xl">
                {country?.name?.common}
              </h1>
              <div className="flex flex-col gap-y-2 font-normal">
                <h3>
                  <span className="font-medium">Native Name: </span>
                  {country?.name?.nativeName
                    ? Object.values(country?.name?.nativeName)[0]?.common ||
                      Object.values(country?.name?.nativeName)[0]?.official
                    : null}
                </h3>
                <h3>
                  <span className="font-medium">Population: </span>
                  {addThousands(country?.population)}
                </h3>
                <h3>
                  <span className="font-medium">Region: </span>
                  {country?.region}
                </h3>
                <h3>
                  <span className="font-medium">Sub Region: </span>
                  {country?.subregion}
                </h3>
                <h3>
                  <span className="font-medium">Capital: </span>
                  {country?.capital}
                </h3>
              </div>
              <div className="my-14 flex flex-col gap-y-2 lg:my-0 lg:gap-y-1">
                <h3>
                  <span className="font-medium">Top Level Domain: </span>
                  {country?.tld?.join(", ")}
                </h3>
                <h3>
                  <span className="font-medium">Currencies: </span>
                  {country?.currencies
                    ? Object.values(country?.currencies)[0]?.name
                    : null}
                </h3>
                <h3>
                  <span className="font-medium">Languages: </span>
                  {country?.languages
                    ? Object.values(country?.languages).join(", ")
                    : null}
                </h3>
              </div>
              {country?.borders && country?.borders?.length > 0 ? (
                <div className="grid grid-cols-1 gap-y-2 lg:col-span-2 lg:mt-10 lg:grid-cols-4">
                  <h2 className="text-lg font-medium">Border Countries:</h2>
                  <div className="grid grid-cols-3 gap-2 lg:col-span-3">
                    {country?.borders?.map((border) => (
                      <Button key={border} href={`/country/${border}`}>
                        {border}
                      </Button>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        ) : (
          <div>Country not found</div>
        )}
      </div>
    </>
  );
};

export default Page;
