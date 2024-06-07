import { useEffect, useCallback } from "react";
import { MAP_ARROW_CODES } from "../../constants";
import { setEnteredValue } from "../../store/slices";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { useKeyPressedElement } from "./hooks";
import { TypographyHeader, TypographyText } from "../../../UI";
import styles from "./KeyPressed.module.css";

export interface IKeyPressedProps {
  isTimerActive: boolean;
}

const KeyPressed: React.FC<IKeyPressedProps> = (props) => {
  // const state = useAppSelector((state) => state.playground);

  const { isTimerActive } = props;
  const dispatch = useAppDispatch();
  const KeyPressedElement = useKeyPressedElement();

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (
        Object.prototype.hasOwnProperty.call(MAP_ARROW_CODES, e.key) &&
        isTimerActive
      ) {
        dispatch(setEnteredValue(e.key));
      }
    },
    [isTimerActive],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <div>
      <TypographyHeader>KeyPressed</TypographyHeader>
      <div className={styles.container}>
        <TypographyText>
          Press the key corresponding to the key in "Random keys"
        </TypographyText>
        <div className={styles.wrapper}>
          <span className={styles.icon}>{KeyPressedElement}</span>
        </div>
      </div>
    </div>
  );
};

export default KeyPressed;
