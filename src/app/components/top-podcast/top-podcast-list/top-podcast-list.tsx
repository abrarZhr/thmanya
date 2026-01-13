import { memo } from "react";
import { RiMore2Fill } from "@remixicon/react";
import Button from "../../button/button";
import { TopPodcastsListProps } from "./types";
import Image from "next/image";
import { getRandomColor } from "@/app/utils/utils";

const TopPodcastsList = ({
  podcastsLayout,
  podcasts,
}: TopPodcastsListProps) => {
  if (podcasts?.length === 0) {
    return (
      <div className="flex justify-center items-center mt-16 text-gray-500">
        No podcasts found.
      </div>
    );
  }

  return (
    <div
      className={`
        ${podcastsLayout === "scroll"
          ? "flex space-x-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 py-10 custom-scrollbar"
          : "grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 gap-3"
        }`}
    >
      {podcasts?.map((item) => {
        return (
          <div
            className="flex flex-col gap-3"
            key={`${item.collectionId}-${item.trackId}`}
          >
            <div
              className={`
          h-[200px] 
          ${podcastsLayout === "scroll" && `w-[200px] `}
              `}
            >
              <Image
                src={item.artworkUrl100}
                alt="img"
                width={400}
                height={400}
                className="h-full w-full"
              />
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col ">
                <p className=" line-clamp-1 text-[0.875rem] font-bold-arabic">
                  {item.trackName}
                </p>
                <span className={`${getRandomColor()} text-xs`}>
                  {item.artistName}
                </span>
              </div>

              <div className="relative inline-block">
                <Button
                  label="more icon"
                  type="button"
                  icon={<RiMore2Fill size={24} className="text-white-25" />}
                  iconOnly
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default memo(TopPodcastsList);
