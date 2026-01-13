import { ReactElement, ReactNode } from "react";

export interface ButtonProps {
  label?: string;
  type: "submit" | "button";
  icon?: ReactNode | ReactElement;
  iconOnly?: boolean;
  onClick?: (e: any) => void;
  classes?: string;
}
