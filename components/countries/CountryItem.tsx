import { countryType } from "@/data";
import styles from "./CountryItem.module.scss";
import { FlagIcon, FlagIconCode } from "react-flag-kit";

interface CountryItemProps {
  country: countryType;
}

export const CountryItem = ({ country }: CountryItemProps) => {
  return (
    <div className={styles.container}>
      <div
        className={styles.image}
      >
        <img src={country.image} />
      </div>
      <div className={styles.description}>
        <div className={styles.title}>{country.name}</div>
        <div className={styles.text}>{country.restaurants}</div>
      </div>
      <div className={styles.flag}>
        <FlagIcon code={country.code} size={80} />
      </div>
    </div>
  );
};
