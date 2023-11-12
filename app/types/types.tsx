export type Theme = 'dark' | 'light';

export interface GeneralContextType {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
  toggleTheme: () => void;
  // ... otros tipos generales
}

export interface Country {
  name: {
    common: string;
  };
  flags: {
    svg: string;
  };
  population: number;
  region: string;
  capital: string;
}

export interface Countries {
  countries: Country[];
  isLoading: boolean;
  isError: any;
}