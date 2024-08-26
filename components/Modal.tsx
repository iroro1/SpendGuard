"use client";
import React, { useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onGenerate: (income: number, focus: string) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onGenerate }) => {
  const [income, setIncome] = useState<number>(0);
  const [focus, setFocus] = useState<string>("balanced");

  if (!isOpen) return null;

  const handleSubmit = (event: React.FormEvent) => {
    if (window !== undefined) {
      const data = localStorage.getItem("data");
      if (data !== null) {
        const obj = JSON.parse(data);
        if (obj !== null) {
          localStorage.setItem(
            "data",
            JSON.stringify({
              country: obj.country,
              currency: obj.currency,
              focus: obj.focus,
            })
          );
        }
      }
    }
    event.preventDefault();
    onGenerate(income, focus);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Generate New Budget</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="flex flex-col">
            <span className="text-gray-700">Monthly Income</span>
            <input
              type="number"
              value={income}
              onChange={(e) => setIncome(parseFloat(e.target.value))}
              className="mt-2 p-3 border border-gray-300 rounded-lg"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-gray-700">Budget Focus</span>
            <select
              value={focus}
              onChange={(e) => setFocus(e.target.value)}
              className="mt-2 p-3 border border-gray-300 rounded-lg"
            >
              <option value="savings">Savings-Heavy</option>
              <option value="investments">Investment-Heavy</option>
              <option value="balanced">Balanced</option>
            </select>
          </label>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 text-gray-800 py-2 px-4 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Generate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
