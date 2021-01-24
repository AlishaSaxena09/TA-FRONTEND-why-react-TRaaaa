import React from "react";

function CountryItem(props) {
  var country = props.country;
  return (
    <tr>
      <td
        className="country-name"
        onClick={() => alert(country.code + " : " + country.emoji)}
      >
        {country.name}
      </td>
      <td>{country.emoji}</td>
    </tr>
  );
}

export default CountryItem;
