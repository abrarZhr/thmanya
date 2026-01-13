import { memo, useEffect, useState } from "react";
import { TopPodcastProps, Podcasts } from "./types";

import Loader from "../loader/loader";
import TopPodcastHeader from "./top-podcast-header/top-podcast-header";
import TopPodcastList from "./top-podcast-list/top-podcast-list";
import { useDebounce } from "@/app/hooks/useDebounce";

const TopPodcast = ({ searchTerm }: TopPodcastProps) => {
  const [podcasts, setPodcasts] = useState<Podcasts>();
  const [loading, setLoading] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // podcasts layout when the more button is clicked (grid || scroll)
  const [podcastsLayout, setPodcastsLayout] = useState<"grid" | "scroll">(
    "scroll"
  );

  const debouncedSearchTerm = useDebounce(searchTerm, 500); // 500ms debounce

  useEffect(() => {
    async function fetchPodcast() {
      if (!debouncedSearchTerm) {
        setPodcasts(undefined); // optionally clear results if no term
        return;
      }

      setLoading(true);
      const params = new URLSearchParams();
      params.append("term", debouncedSearchTerm);

      try {
        const res = await fetch(`/api/search?${params.toString()}`);
        const data = await res.json();
        // set the data
        setPodcasts(data);
      } catch (error) {
        console.error("Failed to fetch podcasts", error);
      } finally {
        setLoading(false);
      }
    }

    // call the api for the podcast
    fetchPodcast();
  }, [debouncedSearchTerm]);

  const moreBtnClicked = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  // menu options is clicked
  const menuOptionClicked = (event: React.MouseEvent) => {
    event.stopPropagation();
    const target = event.target as HTMLButtonElement;
    switch (target.value) {
      case "1":
        setPodcastsLayout("grid");
        break;
      default:
        setPodcastsLayout("scroll");
        break;
    }

    // close the menu when one of the menu is clicked
    setIsMenuOpen(false);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center mt-16">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col gap-5 mt-16 px-6">
        <TopPodcastHeader
          searchTerm={searchTerm}
          podcastsLayout={podcastsLayout}
          menuOptionClick={menuOptionClicked}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          moreBtnClicked={moreBtnClicked}
        />

        <TopPodcastList
          podcastsLayout={podcastsLayout}
          podcasts={podcasts?.results ?? []}
        />
      </div>
    </>
  );
};

export default memo(TopPodcast);
