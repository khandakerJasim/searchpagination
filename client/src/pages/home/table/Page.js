import React from "react";
import { useState } from "react";
import Pagination from "../Pagination";

export default function Page() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; // Example, if you have 10 pages of data

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <h1 className="text-center text-2xl font-bold mt-8">
        Pagination Example
      </h1>
      {/* Your data display logic here */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange()}
      />
    </div>
  );
}
