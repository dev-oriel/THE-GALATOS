import React, { useState } from "react";

const Pagination = ({ totalPages = 12 }) => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="flex items-center justify-center mt-24 gap-4">
      <button
        onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
        className="h-10 w-10 flex items-center justify-center rounded-full border border-primary/20 hover:bg-primary/5 transition-colors disabled:opacity-30"
        disabled={currentPage === 1}
      >
        <span className="material-symbols-outlined">arrow_back</span>
      </button>

      <div className="flex items-center gap-2">
        {[1, 2, 3].map((num) => (
          <button
            key={num}
            onClick={() => setCurrentPage(num)}
            className={`h-10 w-10 flex items-center justify-center rounded-full font-bold transition-all ${
              currentPage === num
                ? "bg-primary text-white shadow-lg shadow-primary/30"
                : "hover:bg-primary/5"
            }`}
          >
            {num}
          </button>
        ))}
        <span className="px-2 text-slate-400">...</span>
        <button
          onClick={() => setCurrentPage(totalPages)}
          className={`h-10 w-10 flex items-center justify-center rounded-full hover:bg-primary/5 ${currentPage === totalPages ? "bg-primary text-white" : ""}`}
        >
          {totalPages}
        </button>
      </div>

      <button
        onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
        className="h-10 w-10 flex items-center justify-center rounded-full border border-primary/20 hover:bg-primary/5 transition-colors disabled:opacity-30"
        disabled={currentPage === totalPages}
      >
        <span className="material-symbols-outlined">arrow_forward</span>
      </button>
    </div>
  );
};

export default Pagination;
