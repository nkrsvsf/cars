import { HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
}

const SecondaryBtn = ({ className, children, ...attrs }: Props) => {
  return (
    <button
      className={`bg-greyDark rounded-[10px] px-[14px] py-[8px] cursor-pointer text-white text-[15px] font-light flex items-center justify-center ${
        className || ""
      }`}
      {...attrs}
    >
      {children}
    </button>
  );
};

export default SecondaryBtn;
