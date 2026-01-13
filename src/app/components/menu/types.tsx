export interface MenuProps {
  isOpen: boolean;
  onClose?: (e?: MouseEvent | React.MouseEvent) => void;
  options: Options[];
  onOptionClick: (event: React.MouseEvent) => void;
}

export interface Options {
  label: string;
  value: string | number;
}
