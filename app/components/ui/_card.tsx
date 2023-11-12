import Image from "next/image";

interface CardProps {
  name: string;
  population: number;
  region: string;
  capital: string;
  flag: string;
}

const Card: React.FC<CardProps> = ({
  name,
  population,
  region,
  capital,
  flag,
}) => {
  return (
    <div
      className="rounded bg-white shadow-md dark:bg-darkBlue dark:text-white"
    >
      <div className="relative h-40 w-full">
        <Image
          src={flag}
          alt={`Flag of ${name}`}
          fill
          objectFit="cover"
          className="rounded-t cursor-pointer"
          onClick={()=>{
            window.location.href = `/country/${name}`
          }}
        />
      </div>
      <div className="flex flex-col gap-y-2 p-5">
        <h3 className="mb-2 text-xl font-bold cursor-pointer">{name}</h3>
        <h4>
          <span className="font-medium">Population: </span>
          {population}
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
