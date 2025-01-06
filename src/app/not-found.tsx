import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <h2 className="text-4xl font-bold text-red-400 mb-4">Not Found</h2>
      <p className="text-lg text-gray-300 mb-6">
        Could not find your requested resource.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition-all duration-300"
      >
        Return Home
      </Link>
    </div>
  );
}
