"use client";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="flex justify-center items-center space-x-2 mt-8">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-2 rounded-lg border font-medium ${
          currentPage === 1
            ? "bg-gray-100 text-gray-500 cursor-not-allowed"
            : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
        }`}
      >
        Previous
      </button>

      {/* Page Numbers */}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-2 rounded-lg border ${
            currentPage === page
              ? "bg-primary-600 text-white border-primary-600"
              : "bg-white text-gray-700 hover:bg-gray-50"
          }`}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 py-2 rounded-lg border font-medium ${
          currentPage === totalPages
            ? "bg-gray-100 text-gray-500 cursor-not-allowed"
            : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
        }`}
      >
        Next
      </button>
    </div>
  );
}
