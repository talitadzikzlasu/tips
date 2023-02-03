import { countryType } from "@/data";

interface CountryItemProps {
  country: countryType;
}

export const CountryItem = ({ country }: CountryItemProps) => {
  return <li>{country.name}</li>;
};
