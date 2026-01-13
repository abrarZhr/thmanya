"use client";

import { useState } from "react";
import TopPodcast from "./components/top-podcast/top-podcast";
import TopEpisodes from "./components/top-episodes/top-episodes";
import Header from "./components/header/header";
import { useDebounce } from "./hooks/useDebounce";

export default function Home() {
  const [searchText, setSearchText] = useState<string>("فنجان");
  const debouncedSearchTerm = useDebounce(searchText, 500);

  return (
    <>
      <Header searchTerm={searchText} setSearchText={setSearchText} />
      {searchText ? (
        <main className="flex flex-col gap-20">
          <TopPodcast searchTerm={debouncedSearchTerm} />
          <TopEpisodes searchTerm={debouncedSearchTerm} />
        </main>
      ) : (
        <p className="flex items-center justify-center h-screen flex-1">
          Type in a search term to start.
        </p>
      )}
    </>
  );
}
