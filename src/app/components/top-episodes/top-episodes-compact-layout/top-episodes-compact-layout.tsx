import { memo } from "react";
import Image from "next/image";
import { TopEpisodesCompactLayoutProps } from "./types";
import { RiMore2Fill } from "@remixicon/react";
import { getRandomColor } from "@/app/utils/utils";
import Button from "../../button/button";

const TopEpisodesCompactLayout = ({ item }: TopEpisodesCompactLayoutProps) => {
  const { artworkUrl60, collectionName, trackName } = item;

  return (
    <>
      <div
        className="
        flex 
        justify-between  
        rounded-[3px]  
        pb-2 
       hover:bg-black-40
        p-2  
      relative
      after:content-['']
    after:absolute
    after:left-0
    after:right-0
    after:bottom-0
    after:h-[1px]
    after:bg-white-25
    "
        key={item.trackId}
      >
        <div className="flex gap-3">
          <Image
            src={artworkUrl60}
            alt="img"
            width={60}
            height={60}
            className="rounded-[3px]"
          />

          <div className="flex flex-col">
            <span className=" text-sm mb-1">{collectionName}</span>

            <span className={`${getRandomColor()} text-xs`}>{trackName}</span>
          </div>
        </div>

        <Button
          label="more icon"
          type="button"
          classes="h-fit"
          icon={<RiMore2Fill size={24} className="text-white-25" />}
          iconOnly
        />
      </div>
    </>
  );
};

export default memo(TopEpisodesCompactLayout);
