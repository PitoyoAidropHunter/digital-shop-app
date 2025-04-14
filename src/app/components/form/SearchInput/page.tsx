// components/SearchInput.tsx
"use client";

import { useState } from "react";
import { Search } from "lucide-react";

export default function SearchInput() {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Searching for:", query);
    // Bisa arahkan ke router atau fetch data di sini
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-md mx-auto relative">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Cari sesuatu..."
        className="w-full py-2 pl-10 pr-4 rounded-2xl border border-primary focus:outline-none focus:ring-2 focus:ring-secondary transition duration-200"
      />
      <button
        type="submit"
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary hover:text-secondary"
      >
        <Search size={20} />
      </button>
    </form>
  );
}
