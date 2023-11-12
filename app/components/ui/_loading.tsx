import { FaSpinner } from "react-icons/fa";

function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <FaSpinner className="h-12 w-12 animate-spin text-white " />
    </div>
  );
}

export default Loading;
