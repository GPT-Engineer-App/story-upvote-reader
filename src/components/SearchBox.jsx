import React from "react";
import { Input } from "@/components/ui/input";

const SearchBox = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="mb-4">
      <Input
        type="text"
        placeholder="Search stories..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;