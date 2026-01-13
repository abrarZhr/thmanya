-- CreateTable
CREATE TABLE "Episode" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "trackName" TEXT NOT NULL,
    "collectionName" TEXT,
    "artworkUrl60" TEXT,
    "artworkUrl160" TEXT,
    "releaseDate" DATETIME,
    "trackTimeMillis" INTEGER,
    "searchTerm" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Podcast" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "trackName" TEXT NOT NULL,
    "artistName" TEXT,
    "artworkUrl100" TEXT,
    "artworkUrl600" TEXT,
    "collectionName" TEXT,
    "searchTerm" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE INDEX "Episode_searchTerm_idx" ON "Episode"("searchTerm");

-- CreateIndex
CREATE INDEX "Podcast_searchTerm_idx" ON "Podcast"("searchTerm");
