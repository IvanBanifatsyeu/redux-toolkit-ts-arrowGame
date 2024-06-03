import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setCurrentStep, setSteps, setUnsuccess } from "./store/slices";
import Controls from "./components/Controls";
import { INTERVAL_TIME, END_GAME_CONDITIONS } from "./constants";
import RandomKeys from "./components/RandomKeys";
import KeyPressed from "./components/KeyPressed";
import Score from "./components/Score";
import Modal from "./components/Modal";
import Description from "./components/Description";
import styles from "./Playground.module.css";

const Playground: React.FC = () => {
  const refreshIntervalId = useRef<ReturnType<typeof setInterval> | null>(null);
  const [isTimerActive, setIsTimerActive] = useState<boolean>(false);
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [isSuccessEndGame, setIsSuccessEndGame] = useState<boolean>(false);
  const state = useAppSelector((state) => state.playground);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isTimerActive) {
      refreshIntervalId.current = setInterval(() => {
        dispatch(setUnsuccess());
        dispatch(setCurrentStep());
        dispatch(setSteps());
      }, INTERVAL_TIME);
    } else {
      clearInterval(refreshIntervalId.current as unknown as number);
    }

    return () => {
      clearInterval(refreshIntervalId.current as unknown as number);
    };
  }, [isTimerActive, dispatch]);

  useEffect(() => {
    const isSuccessful =
      state.totalSuccessful === END_GAME_CONDITIONS.SUCCESS_COUNT;

    const isUnSuccessful =
      state.totalUnsuccessful === END_GAME_CONDITIONS.UNSUCCESS_COUNT;

    isSuccessful && setIsSuccessEndGame(true);
    isUnSuccessful && setIsSuccessEndGame(false);

    if (isSuccessful || isUnSuccessful) {
      setIsShowModal(true);
      setIsTimerActive(false);
    }
  }, [state.totalSuccessful, state.totalUnsuccessful]);

  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <RandomKeys isTimerActive={isTimerActive} />
        <KeyPressed isTimerActive={isTimerActive} />
        <Score />
      </div>
      <div className={styles.column}>
        <Description />
        <Controls
          isTimerActive={isTimerActive}
          setIsTimerActive={setIsTimerActive}
        />
      </div>

      {isShowModal && (
        <Modal
          setIsShowModal={setIsShowModal}
          isSuccessEndGame={isSuccessEndGame}
        />
      )}
    </div>
  );
};

export default Playground;
