import { FaArrowLeft } from "react-icons/fa6";

export default function Tutordashboard() {
  return (
    <div className="border w-[90%] rounded-lg text-start p-2">
      <div className="flex hover:cursor-pointer w-16">
        <FaArrowLeft className="text-xl hover:fill-yellow-800" /><span className="ml-3 select-none cursor-pointer">Back</span>
      </div>
      <div>
        <h1 className="text-3xl">Tutor Dashboard</h1>
      </div>
    </div>
  );
}