import React, { ChangeEvent, FormEvent } from "react";

interface StageRole3Props {
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => void;
  prevStep: () => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const StageRole3: React.FC<StageRole3Props> = ({
  handleChange,
  prevStep,
  handleSubmit,
}) => {
  const inputClass =
    "w-full rounded-full border-2 border-teal-200 p-4 bg-white/90 focus:outline-none focus:ring-2 focus:ring-teal-400 transition text-gray-800 text-lg mb-3 placeholder-gray-400";

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="password"
        name="password"
        placeholder="Password"
        className={inputClass}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        className={inputClass}
        onChange={handleChange}
        required
      />

      <div className="flex justify-between mt-6 gap-3">
        <button
          onClick={prevStep}
          type="button"
          className="w-1/2 bg-gray-200 text-gray-800 rounded-full py-3 px-6 font-semibold hover:bg-gray-300 transition shadow"
        >
          Back
        </button>
        <button
          type="submit"
          className="w-1/2 bg-gradient-to-r from-teal-500 to-purple-500 text-white rounded-full py-3 px-6 font-semibold shadow hover:from-teal-600 hover:to-purple-600 transition text-lg"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default StageRole3;
