import { memo, useMemo } from "react";
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiMore2Fill,
} from "@remixicon/react";
import Button from "../../button/button";
import Menu from "../../menu/menu";
import { TopPodcastsHeaderProps } from "./types";

const TopPodcastsHeader = ({
  searchTerm,
  podcastsLayout,
  menuOptionClick,
  isMenuOpen,
  moreBtnClicked,
  setIsMenuOpen,
}: TopPodcastsHeaderProps) => {
  // more button options
  const moreBtnOptions = useMemo(() => {
    const options = [];

    if (podcastsLayout == "scroll") {
      options.push({ label: "Switch layout to Grid", value: 1 });
    }
    if (podcastsLayout == "grid") {
      options.push({ label: "Switch layout to Scroll", value: 2 });
    }

    return options;
  }, [podcastsLayout]);

  const handleCloseMenu = () => setIsMenuOpen(false);

  return (
    <>
      <div className="flex justify-between pb-5 border-b border-white-25 sticky top-12 bg-dark-blue-98">
        <h2 className="font-bold-arabic">Top podcasts for {searchTerm}</h2>
        <div className="flex items-center justify-center gap-3">
          <div className="flex items-center justify-center gap-3">
            {/* this is left arrow  */}
            <Button
              label="more icon"
              type="button"
              icon={<RiArrowLeftSLine size={24} className="text-white/50" />}
              iconOnly
            />
            {/* this is right arrow  */}

            <Button
              label="more icon"
              type="button"
              icon={<RiArrowRightSLine size={24} className="text-white/50 " />}
              iconOnly
            />
          </div>

          <div className="relative  text-center flex  justify-center">
            {/* this is the more button (three dots) */}
            <Button
              label="more icon"
              type="button"
              icon={<RiMore2Fill size={22} />}
              iconOnly
              onClick={moreBtnClicked}
            />
            {/* this is the menu options  */}
            <Menu
              onOptionClick={menuOptionClick}
              isOpen={isMenuOpen}
              options={moreBtnOptions}
              onClose={handleCloseMenu}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(TopPodcastsHeader);
