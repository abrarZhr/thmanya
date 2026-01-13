import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiMore2Fill,
} from "@remixicon/react";
import { memo } from "react";
import Button from "../button/button";
import Search from "../search/search";
import { HeaderProps } from "./type";

const Header = ({ searchTerm, setSearchText }: HeaderProps) => {
  return (
    <header className="flex flex-row  items-center gap-3 sticky top-0 bg-dark-blue-98 z-50 sm:px-0 px-2">
      <div className="px-[5px] py-3.5 lg:block hidden">
        <RiArrowLeftSLine size={24} className="text-white/50" />
      </div>

      <div className="px-[5px] py-3.5 lg:block hidden">
        <RiArrowRightSLine size={24} className="text-white/50" />
      </div>

      <Search
        searchText={searchTerm}
        setSearchText={setSearchText}
        placeHolder="Search through over 70 million podcasts and episodes..."
      />

      <Button
        label="Log in"
        type="button"
        classes="lg:block hidden hover:brightness-[1.25] transition duration-200 text-[0.8125rem]"
      />
      <Button
        label="Sign Up"
        type="button"
        classes="lg:block hidden hover:brightness-[1.25] transition duration-200 text-[0.8125rem]"
      />
      <div className="px-[5px] py-3.5 ">
        <RiMore2Fill size={22} />
      </div>
    </header>
  );
};

export default memo(Header);
