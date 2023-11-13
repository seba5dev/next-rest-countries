import Image from "next/image";
import Link from "next/link";
import { Country } from "@/app/types/types";
import { addThousands } from "@/app/utils/utils";

const Card: React.FC<Country> = ({
  name,
  population,
  region,
  capital,
  flags,
  cca2,
}) => {
  return (
    <div className="rounded bg-white pb-5 text-sm shadow-md dark:bg-darkBlue dark:text-white">
      <div className="relative h-40 w-full">
        <Link href={`/country/${cca2}`}>
          <Image
            src={flags.svg}
            alt={flags.alt}
            fill
            objectFit="cover"
            className="cursor-pointer rounded-t"
          />
        </Link>
      </div>
      <div className="flex flex-col gap-y-2 p-5 font-normal">
        <Link
          href={`/country/${cca2}`}
          className="mb-2 cursor-pointer text-xl font-bold"
        >
          {name.common}
        </Link>
        <h4>
          <span className="font-medium">Population: </span>
          {addThousands(population)}
        </h4>
        <h4>
          <span className="font-medium">Region: </span>
          {region}
        </h4>
        <h4>
          <span className="font-medium">Capital: </span>
          {capital}
        </h4>
      </div>
    </div>
  );
};

export default Card;
