// import styles from "./RandomKeys.module.css"

import { useAppSelector } from "../../../../app/hooks";
import { MAP_ARROW_CODES } from "../../constants";
import type { IMapArrowCodes } from "../../types";

export interface IRandomKeysProps {
  isTimerActive: boolean;
}

const RandomKeys: React.FC<IRandomKeysProps> = (props) => {
  // const {isTimerActive} = props
  const state = useAppSelector((state) => state.playground);
  console.log(state.steps);

  return (
    <div>
      {state.steps.map((elem: any) => (
        <span key={elem.step}>
          {MAP_ARROW_CODES[elem.currentValue as keyof IMapArrowCodes]}
        </span>
      ))}
    </div>
  );
};

export default RandomKeys;
