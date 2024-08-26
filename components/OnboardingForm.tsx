"use client";
import { countries } from "@/lib/countries";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const OnboardingForm = () => {
  const [country, setCountry] = useState("Nigeria");
  const [currency, setCurrency] = useState("NGN");
  const [focus, setFocus] = useState("");
  const router = useRouter();
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const obj = { country, currency, focus };
    if (window !== undefined) localStorage.setItem("data", JSON.stringify(obj));
    router.push("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex flex-col text-left">
        <label htmlFor="country" className="text-lg font-medium text-gray-700">
          Country:
        </label>
        <select className="mt-2 p-3 border border-gray-300 rounded-lg">
          {countries.map((country, index) => (
            <option
              key={index}
              onSelect={() => {
                setCountry(country.name);
                setCurrency(country.currency);
              }}
            >
              {" "}
              {country.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col text-left">
        <label htmlFor="currency" className="text-lg font-medium text-gray-700">
          Currency:
        </label>
        <select className="mt-2 p-3 border border-gray-300 rounded-lg">
          {countries.map((country, index) => (
            <option key={index} onSelect={() => setCurrency(country.currency)}>
              {" "}
              {country.currency}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col text-left">
        <label htmlFor="focus" className="text-lg font-medium text-gray-700">
          Budget Focus:
        </label>
        <select
          id="focus"
          value={focus}
          onChange={(e) => setFocus(e.target.value)}
          className="mt-2 p-3 border border-gray-300 rounded-lg"
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
        disabled={!country || !currency || !focus}
        type="submit"
        className="w-full bg-blue-600 text-white py-3 disabled:bg-blue-300 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
      >
        Submit
      </button>
    </form>
  );
};

export default OnboardingForm;
