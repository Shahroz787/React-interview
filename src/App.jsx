import { useState } from "react";
import "./App.css";

const countries = [
  {
    name: "India",
    value: "IN",
    cities: ["Delhi", "Mumbai"],
  },
  {
    name: "Pak",
    value: "PK",
    cities: ["Lahore", "Karachi"],
  },
  {
    name: "Bangladesh",
    value: "BG",
    cities: ["Dhaka", "Chittagong"],
  },
];

function App() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");

  const handleCountryChange = (event) => {
    console.log(event.target.value);
    let selectedValue = event.target.value;
    setSelectedCountry(selectedValue);

    const country = countries.find(
      (country) => country.value === selectedValue
    );
    let cityList = country ? country.cities : [];
    setCities(cityList);
    setSelectedCity("");
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };
  return (
    <div className="App">
      <select onChange={handleCountryChange} value={selectedCountry} className="selection">
        <option value="" className="optionselected">Select a country</option>
        {countries.map((item) => (
          <option key={item.value} value={item.value} className="optionselected1">
            {item.name}
          </option>
        ))}
      </select>

      <input
        placeholder="Enter city"
        list="city"
        value={selectedCity}
        onChange={handleCityChange}
        className="selection1"
      />
      <datalist id="city">
        {cities.map((cityitem, index) => (
          <option key={index} value={cityitem}>
            {cityitem}
          </option>
        ))}
      </datalist>
    </div>
  );
}

export default App;
