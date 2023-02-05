import { countryType } from "@/data";
import { CountryItem } from "./CountryItem";
import styles from "./CountryList.module.scss";
interface CountryListProps {
  countries: countryType[];
}

export const CountryList = ({ countries }: CountryListProps) => {
  return (
    <ul className={styles.container}>
      {countries.map((country) => {
        return <CountryItem key={country.name} country={country} />;
      })}
    </ul>
  );
};
