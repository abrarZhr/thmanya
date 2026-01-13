import { memo } from "react";
import { searchProps } from "./types";

const Search = ({ placeHolder, searchText, setSearchText }: searchProps) => {
  const handleSeachTextChange = (e: any) => {
    setSearchText(e.target.value);
  };

  return (
    <>
      <input
        onChange={handleSeachTextChange}
        name="search"
        value={searchText}
        placeholder={placeHolder}
        type="search"
        className={`
          p-2
          rounded
       border-[1.2px] border-gray-500 
         flex-1
         outline-0
       placeholder-white-25
       focus:border-[#6B4080]
       transition-colors
         text-center
       `}
      />
    </>
  );
};

export default memo(Search);
