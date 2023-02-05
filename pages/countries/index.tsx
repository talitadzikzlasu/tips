import { NextPage } from "next";
import { getAllCountries } from "../../data";
import { CountryList } from "@/components/countries/CountryList";
import styles from "@/styles/Countries.module.scss";
import { useEffect, useState } from "react";
import { Navigation } from "@/components/layout/Navigation";

const CountriesPage: NextPage = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }, []);
  const countries = getAllCountries();

  return (
    <div className={styles.container}>
      <h1>List of Countries</h1>
      <CountryList countries={countries} />
      <Navigation scrolled={scrolled} />
    </div>
  );
};

export default CountriesPage;
