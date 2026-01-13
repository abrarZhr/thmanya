export const getRandomColor = (): string => {
  const colors = [
    "text-pink-400",
    "text-yellow-400",
    "text-green-400",
    "text-blue-400",
    "text-purple-400",
    "text-orange-400",
    "text-red-400",
    "text-cyan-400",
    "text-lime-400",
    "text-rose-400",
    "text-amber-400",
    "text-emerald-400",
    "text-indigo-400",
    "text-violet-400",
    "text-fuchsia-400",
    "text-teal-400",
  ];

  // Use Math.random() to get truly random colors on each render
  const colorIndex = Math.floor(Math.random() * colors.length);
  return colors[colorIndex];
};

export const getRandomColorPair = () => {
  const colorPairs = [
    { bg: "bg-red-800/10", text: "text-red-400" },
    { bg: "bg-blue-800/10", text: "text-blue-400" },
    { bg: "bg-green-800/10", text: "text-green-400" },
    { bg: "bg-yellow-800/10", text: "text-yellow-400" },
    { bg: "bg-purple-800/10", text: "text-purple-400" },
    { bg: "bg-pink-800/10", text: "text-pink-400" },
    { bg: "bg-indigo-800/10", text: "text-indigo-400" },
    { bg: "bg-teal-800/10", text: "text-teal-400" },
    { bg: "bg-orange-800/10", text: "text-orange-400" },
    { bg: "bg-cyan-800/10", text: "text-cyan-400" },
    { bg: "bg-emerald-800/10", text: "text-emerald-400" },
    { bg: "bg-violet-800/10", text: "text-violet-400" },
    { bg: "bg-rose-800/10", text: "text-rose-400" },
    { bg: "bg-amber-800/10", text: "text-amber-400" },
    { bg: "bg-lime-800/10", text: "text-lime-400" },
    { bg: "bg-sky-800/10", text: "text-sky-400" },
  ];

  return colorPairs[Math.floor(Math.random() * colorPairs.length)];
};

export const formatReleaseDate = (dateString?: string): string => {
  if (!dateString) return "N/A";

  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
};

export const formatDuration = (millis?: number): string => {
  if (!millis) return "N/A";
  return `${Math.floor(millis / 60000)}min`;
};
