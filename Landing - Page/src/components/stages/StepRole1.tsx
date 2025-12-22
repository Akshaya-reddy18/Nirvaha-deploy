import React, { ChangeEvent } from "react";

interface StepRole1Props {
  role: string;
  setRole: (role: string) => void;
  nextStep: () => void;
}

const StepRole1: React.FC<StepRole1Props> = ({ role, setRole, nextStep }) => {
  return (
    <div className="flex flex-col">
      <label className="mb-2 font-semibold text-gray-700">Select Role</label>
      <select
        value={role}
        onChange={(e: ChangeEvent<HTMLSelectElement>) => setRole(e.target.value)}
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition cursor-pointer"
      >
        <option value="user">User</option>
        <option value="admin">Admin</option>
        <option value="hr">HR</option>
        <option value="doctor">Doctor</option>
      </select>
      <button
        onClick={nextStep}
        type="button"
        className="w-full mt-6 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-800 transition cursor-pointer tracking-wider"
      >
        Next
      </button>
    </div>
  );
};

export default StepRole1;
