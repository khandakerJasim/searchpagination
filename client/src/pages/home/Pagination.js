import React from "react";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(
      <button
        key={i}
        onClick={() => onPageChange(i)}
        className={`px-4 py-2 mx-1 border rounded ${
          i === currentPage
            ? "bg-blue-500 text-white"
            : "bg-white text-blue-500 border-blue-500"
        }`}
      >
        {i}
      </button>
    );
  }
  return (
    <div className="flex justify-center items-center mt-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 mx-1 border rounded bg-white text-blue-500 border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Previous
      </button>
      {pages}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 mx-1 border rounded bg-white text-blue-500 border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  );
}
