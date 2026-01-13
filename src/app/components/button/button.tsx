import { memo } from "react";
import { ButtonProps } from "./types";

const Button = ({
  label,
  type,
  icon: Icon,
  iconOnly,
  onClick,
  classes,
}: ButtonProps) => {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className={`
          cursor-pointer
          ${classes && classes}
         ${
           !iconOnly &&
           !Icon &&
           `
          bg-gradient-blue
         rounded-[5px]
         px-3
         py-[7px]
        `
         }
         `}
      >
        {iconOnly ? Icon : <>{label}</>}
      </button>
    </>
  );
};

export default memo(Button);
