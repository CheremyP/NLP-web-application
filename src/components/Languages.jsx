import React, { useState } from "react";
import languagesData from "../contents/languages.json";

function LanguageSelector(props) {
  function handleLanguageChange(event) {
    props.onLanguageChange(event.target.value);
  }
  return (
    <div>
      <label htmlFor="languages" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Select a language
      </label>
      <select onChange={handleLanguageChange}
        id="languages"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option disabled>Select a language</option>
        {Object.entries(languagesData).map(([key, value]) => (
        <option key={value} value={value}>{key}</option>
        ))}
      </select>
    </div>
  );
}

export default LanguageSelector;
