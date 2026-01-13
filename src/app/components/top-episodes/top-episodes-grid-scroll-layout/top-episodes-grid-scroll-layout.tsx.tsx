import { memo, useMemo } from "react";
import Image from "next/image";
import { TopEpisodesGridScrollLayoutProps } from "./types";
import { RiMore2Fill } from "@remixicon/react";
import {
  formatDuration,
  formatReleaseDate,
  getRandomColorPair,
} from "@/app/utils/utils";

const TopEpisodesGridScrollLayout = ({
  item,
}: TopEpisodesGridScrollLayoutProps) => {
  // to get a random color for the background and the text
  const { bg, text } = useMemo(getRandomColorPair, []);

  return (
    <>
      <div className={`flex-shrink-0 rounded-lg overflow-hidden ${bg}`}>
        <div className="flex">
          <div className="w-[100px] h-[100px] flex-shrink-0">
            <Image
              src={item.artworkUrl160 || "/placeholder.svg"}
              alt="img"
              width={100}
              height={100}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-between flex-1 min-w-0 p-3">
            <div>
              <div className="flex justify-between items-start mb-1">
                <h3
                  className={`text-xs font-medium line-clamp-2 pr-2 flex-1 ${text}`}
                >
                  {item.trackName}
                </h3>
                <RiMore2Fill
                  size={16}
                  className="text-white-25 cursor-pointer flex-shrink-0"
                />
              </div>
              <p className="text-gray-400 text-sm line-clamp-1">
                {item.collectionName}
              </p>
            </div>

            <div className="flex justify-between items-center text-xs text-gray-500">
              <span>{formatReleaseDate(item.releaseDate)}</span>
              <span>{formatDuration(item.trackTimeMillis)}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(TopEpisodesGridScrollLayout);
