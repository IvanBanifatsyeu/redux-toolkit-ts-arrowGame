import { useAppSelector } from "../../../../../../app/hooks";
import cn from "classnames";
import type { IPlaygroundStateStepsState } from "../../../../store/types";
import { MAP_ARROW_CODES } from "../../../../constants";
import type { IMapArrowCodes } from "../../../../types";
import stylesCommon from "../../RandomKeys.module.css";
import styles from "./RandomArrows.module.css";

const RandomArrows: React.FC = () => {
  const state = useAppSelector((state) => state.playground);

  const getStylesRandomKeys = (elem: IPlaygroundStateStepsState): string => {
    return cn(
      stylesCommon.icon,
      elem.success && elem.success !== null && styles.iconSuccess,
      !elem.success && elem.success !== null && styles.iconUnSuccess,
    );
  };

  return (
    <div className={stylesCommon.wrapper}>
      {state.steps.map((elem: any) => (
        <span key={elem.step} className={getStylesRandomKeys(elem)}>
          {MAP_ARROW_CODES[elem.currentValue as keyof IMapArrowCodes]}
        </span>
      ))}
    </div>
  );
};

export default RandomArrows;
