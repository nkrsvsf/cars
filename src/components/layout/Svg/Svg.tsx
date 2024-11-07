import { FC } from "react";
import { svgSprite } from "../../../assets/svgSprite";

interface SvgProps {
  className?: string;
  id: SvgId;
  pathClass?: string;
}

export type SvgId = keyof ReturnType<typeof svgSprite>;

const Svg: FC<SvgProps> = ({ className, pathClass, id }) => {
  return <>{svgSprite(className, pathClass)[id]}</>;
};

export default Svg;
