import React, { useState } from "react";

function SpecialtiesInput({ specialties, setSpecialties }) {
  const [inputValue, setInputValue] = useState("");

  const handleAddSpecialty = () => {
    if (inputValue.trim() !== "" && !specialties.includes(inputValue.trim())) {
      setSpecialties([...specialties, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleRemoveSpecialty = (indexToRemove) => {
    const updated = specialties.filter((_, index) => index !== indexToRemove);
    setSpecialties(updated);
  };

  return (
    <div className="mb-4">
      <label className="block text-teal-700 font-medium mb-1">
        Specialties
      </label>
      <div className="flex gap-2 mb-2">
        <input
          className="flex-1 px-3 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          type="text"
          placeholder="Enter a specialty (e.g., Cardiology)"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          type="button"
          onClick={handleAddSpecialty}
          className="px-3 py-2 bg-teal-600 text-white rounded hover:bg-teal-700"
        >
          Add
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {specialties.map((spec, index) => (
          <span
            key={index}
            className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full flex items-center gap-2"
          >
            {spec}
            <button
              type="button"
              onClick={() => handleRemoveSpecialty(index)}
              className="text-teal-600 hover:text-red-500"
            >
              &times;
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}

export default SpecialtiesInput;
