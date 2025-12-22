import React, { ChangeEvent } from "react";

interface StageRole2Props {
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => void;
  nextStep: () => void;
}

const StageRole2: React.FC<StageRole2Props> = ({ handleChange, nextStep }) => {
  const inputClass =
    "w-full rounded-full border-2 border-teal-200 p-4 bg-white/90 focus:outline-none focus:ring-2 focus:ring-teal-400 transition text-gray-800 text-lg mb-3 placeholder-gray-400";

  return (
    <div>
      <input
        type="email"
        name="email"
        placeholder="Email"
        className={inputClass}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        className={inputClass}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        className={inputClass}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="dob"
        className={inputClass}
        onChange={handleChange}
        required
      />

      <div className="flex justify-between mt-6 w-full">
        <button
          onClick={nextStep}
          type="button"
          className="w-full bg-gradient-to-r from-teal-500 to-purple-500 text-white rounded-full py-4 px-8 font-semibold shadow hover:from-teal-600 hover:to-purple-600 transition text-xl"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StageRole2;
