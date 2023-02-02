import { NextPage } from "next";

const countries = [
  {
    name: "France",
    continent: "Europe",
    tips: "Ah, bonjour! In France, leaving a tip is a sign of appreciation and good service. Usually, 10% of the bill is the standard, but feel free to round up or add a few extra coins. Tipping in bars and cafes is optional, but rounding up the total bill is a nice gesture. Taxi drivers also appreciate rounding up the fare.  ",
    restaurants: "10% of the total bill or round up the total bill",
    bars: "Round up the total bill",
    taxi: "Round up the total fare",
    hotel:
      "A small tip for the housekeeping staff is appreciated, but not expected. Leave a few coins on the dresser or tip directly.",
    other:
      "Tipping in hair salons and spas is not common, but rounding up the total bill is appreciated.",
  },
  {
    name: "Italy",
    continent: "Europe",
    tips: "Ciao! Tipping in Italy is expected, especially in restaurants. The standard is to leave 10% of the bill, but feel free to round up. Tipping baristas in cafes is not expected, but rounding up the total bill is appreciated. Taxi drivers appreciate rounding up the fare.  ",
    restaurants: "10% of the total bill or round up the total bill",
    bars: "Round up the total bill",
    taxi: "Round up the total fare",
    hotel:
      "Leaving a small tip for the housekeeping staff is appreciated, but not expected. Leave a few coins on the dresser or tip directly.",
    other:
      "Tipping in hair salons and spas is not common, but rounding up the total bill is appreciated.",
  },
  {
    name: "Germany",
    continent: "Europe",
    tips: "Guten Tag! Tipping in Germany is expected, especially in restaurants. The standard is to leave 10% of the bill, but feel free to round up. Tipping in bars is not expected, but rounding up the total bill is appreciated. Taxi drivers appreciate rounding up the fare.  ",
    restaurants: "10% of the total bill or round up the total bill",
    bars: "Round up the total bill",
    taxi: "Round up the total fare",
    hotel:
      "Leaving a small tip for the housekeeping staff is appreciated, but not expected. Leave a few coins on the dresser or tip directly.",
    other:
      "Tipping in hair salons and spas is not common, but rounding up the total bill is appreciated.",
  },
  {
    name: "United Kingdom",
    continent: "Europe",
    tips: "Cheers! Tipping in the UK is expected, especially in restaurants. The standard is to leave 10-15% of the bill, but feel free to round up. Tipping in bars is not expected, but rounding up the total bill is appreciated. taxi drivers appreciate rounding up the fare.  ",
    restaurants: "10-15% of the total bill or round up the total bill",
    bars: "Round up the total bill",
    taxi: "Round up the total fare",
    hotel:
      "Leaving a small tip for the housekeeping staff is appreciated, but not expected. Leave a few coins on the dresser or tip directly.",
    other:
      "Tipping in hair salons and spas is not common, but rounding up the    total bill is appreciated.",
  },
  {
    name: "Spain",
    continent: "Europe",
    tips: "Hola! Tipping in Spain is expected, especially in restaurants. The standard is to leave 10% of the bill, but feel free to round up. Tipping in bars is not expected, but rounding up the total bill is appreciated. taxi drivers appreciate rounding up the fare.  ",
    restaurants: "10% of the total bill or round up the total bill",
    bars: "Round up the total bill",
    taxi: "Round up the total fare",
    hotel:
      "Leaving a small tip for the housekeeping staff is appreciated, but not expected. Leave a few coins on the dresser or tip directly.",
    other:
      "Tipping in hair salons and spas is not common, but rounding up the total bill is appreciated.",
  },
  {
    name: "Netherlands",
    continent: "Europe",
    tips: "Hallo! Tipping in the Netherlands is expected, especially in restaurants. The standard is to leave 10% of the bill, but feel free to round up. Tipping in bars is not expected, but rounding up the total bill is appreciated. taxi drivers appreciate rounding up the fare.  ",
    restaurants: "10% of the total bill or round up the total bill",
    bars: "Round up the total bill",
    taxi: "Round up the total fare",
    hotel:
      "Leaving a small tip for the housekeeping staff is appreciated, but not expected. Leave a few coins on the dresser or tip directly.",
    other:
      "Tipping in hair salons and spas is not common, but rounding up the total bill is appreciated.",
  },
  {
    name: "Sweden",
    continent: "Europe",
    tips: "Hej! Tipping in Sweden is not expected, but rounding up the total bill in restaurants is appreciated. Tipping in bars is not expected, but rounding up the total bill is appreciated. taxi drivers appreciate rounding up the fare.  ",
    restaurants: "Round up the total bill",
    bars: "Round up the total bill",
    taxi: "Round up the total fare",
    hotel:
      "Leaving a small tip for the housekeeping staff is appreciated, but not expected. Leave a few coins on the dresser or tip directly.",
    other:
      "Tipping in hair salons and spas is not common, but rounding up the total bill is appreciated.",
  },
  {
    name: "Norway",
    continent: "Europe",
    tips: "Hei! Tipping in Norway is not expected, but rounding up the total bill in restaurants is appreciated. Tipping in bars is not expected, but rounding up the total bill is appreciated. taxi drivers appreciate rounding up the fare.  ",
    restaurants: "Round up the total bill",
    bars: "Round up the total bill",
    taxi: "Round up the total fare",
    hotel:
      "Leaving a small tip for the housekeeping staff is appreciated, but not expected. Leave a few coins on the dresser or tip directly.",
    other:
      "Tipping in hair salons and spas is not common, but rounding up the total bill is appreciated.",
  },
];

const CountriesPage: NextPage = () => {
  return (
    <div>
      <h1>List of Countries</h1>
      <ul>
        {countries.map((country) => {
          return (
            <li key={country.name}>
              <div>{country.name}</div>
              <div>{country.tips}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CountriesPage;
