import { countryType } from "@/data";
import { CountryItem } from "./CountryItem";

interface CountryListProps {
  countries: countryType[];
}

export const CountryList = ({ countries }: CountryListProps) => {
  return (
    <ul>
      {countries.map((country) => {
        return <CountryItem country={country} />;
      })}
    </ul>
  );
};
