import React, { ChangeEvent, useState } from "react";
import { MdSearch } from "react-icons/md";

type searchProps = {
  handleSearchNote: React.Dispatch<React.SetStateAction<string>>;
};

export const Search = ({ handleSearchNote }: searchProps) => {
  return (
    <div className="search">
      <MdSearch className="search-icons" size={"1.3em"} />
      <input
        type="text"
        placeholder="Type to search..."
        onChange={(e) => handleSearchNote(e.target.value)}
      />
    </div>
  );
};
