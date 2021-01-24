import React from "react";
import countries from "./countries.json";
import CountryItem from "./CountryItem";
import "./styles.css";

function App() {
  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>Country Name</th>
            <th>Country Emoji</th>
          </tr>
        </thead>
        <tbody>
          {countries.map((country) => {
            return <CountryItem key={country.code} country={country} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
