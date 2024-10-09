import { IconContext } from "react-icons";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

export function ArrowIconsLeft({ size, color }) {
  return (
    <IconContext.Provider value={{ size: size, color: color }}>
      <HiChevronLeft />
    </IconContext.Provider>
  );
}

export function ArrowIconsRight({ size, color }) {
  return (
    <IconContext.Provider value={{ size: size, color: color }}>
      <HiChevronRight />
    </IconContext.Provider>
  );
}
