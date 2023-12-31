export type Theme = "dark" | "light";

export interface Country {
  name: {
    common: string;
    nativeName?: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  tld?: string[];
  cca2: string;
  currencies?: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  capital: string;
  region: string;
  subregion?: string;
  languages?: {
    [key: string]: string;
  };
  borders?: string[];
  population: number;
  flags: {
    svg: string;
    alt: string;
  };
  // Status is used to determine if the country is exists or not
  status?: number;
}

export interface Countries {
  countries: Country[];
  isLoading: boolean;
  isError: any;
}
