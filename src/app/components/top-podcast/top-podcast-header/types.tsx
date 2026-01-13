export interface TopPodcastsHeaderProps {
  searchTerm: string;
  podcastsLayout: string;
  menuOptionClick: (e: any) => void;
  isMenuOpen: boolean;
  moreBtnClicked: (e: any) => void;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
