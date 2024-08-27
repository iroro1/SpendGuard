"use client";
import { countries } from "@/lib/countries";
import { calculateBudget } from "@/lib/functions";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaDollarSign, FaGlobe, FaRegMoneyBillAlt } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

const OnboardingForm: React.FC = () => {
  const [country, setCountry] = useState("Nigeria");
  const [currency, setCurrency] = useState("NGN");
  const [focus, setFocus] = useState("");
  const [income, setIncome] = useState("");
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const budget = calculateBudget(+income, focus);
    router.push(
      "/dashboard?" +
        `country=${country}&currency=${currency}&income=${income}&focus=${focus}&budget=${JSON.stringify(
          budget
        )}`
    );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex flex-col text-left">
        <label
          htmlFor="country"
          className="text-lg font-medium text-gray-700 flex items-center"
        >
          <FaGlobe className="mr-2 text-gray-500" />
          Country:
        </label>
        <select
          id="country"
          className="mt-2 p-3 border border-gray-300 rounded-lg bg-white flex items-center"
          value={country}
          onChange={(e) => {
            const selectedCountry = e.target.value;
            setCountry(selectedCountry);
            setCurrency(
              countries.find((c) => c.name === selectedCountry)?.currency ||
                "NGN"
            );
          }}
        >
          {countries.map((country, index) => (
            <option key={index} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col text-left">
        <label
          htmlFor="currency"
          className="text-lg font-medium text-gray-700 flex items-center"
        >
          <FaDollarSign className="mr-2 text-gray-500" />
          Currency:
        </label>
        <select
          id="currency"
          className="mt-2 p-3 border border-gray-300 rounded-lg bg-white flex items-center"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          {countries.map((country, index) => (
            <option key={index} value={country.currency}>
              {country.currency}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col text-left">
        <label
          htmlFor="income"
          className="text-lg font-medium text-gray-700 flex items-center"
        >
          <FaRegMoneyBillAlt className="mr-2 text-gray-500" />
          Income:
        </label>
        <input
          type="number"
          id="income"
          value={income}
          placeholder="Enter your income"
          onChange={(e) => setIncome(e.target.value)}
          className="mt-2 p-3 border border-gray-300 rounded-lg bg-white"
        />
      </div>

      <div className="flex flex-col text-left">
        <label
          htmlFor="focus"
          className="text-lg font-medium text-gray-700 flex items-center"
        >
          <IoMdArrowDropdown className="mr-2 text-gray-500" />
          Budget Focus:
        </label>
        <select
          id="focus"
          value={focus}
          onChange={(e) => setFocus(e.target.value)}
          className="mt-2 p-3 border border-gray-300 rounded-lg bg-white"
        >
          <option value="" disabled>
            Select focus
          </option>
          <option value="savings">Savings-Heavy</option>
          <option value="investments">Investment-Heavy</option>
          <option value="balanced">Balanced</option>
        </select>
      </div>

      <button
        disabled={!country || !currency || !focus || !income}
        type="submit"
        className="w-full bg-blue-600 text-white py-3 disabled:bg-blue-300 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
      >
        Submit
      </button>
    </form>
  );
};

export default OnboardingForm;
