import styles from "./Controls.module.css";
import { Button } from "../../../UI";

import { PlayArrow, Pause } from "@mui/icons-material";

export interface IControlsProps {
  isTimerActive: boolean;
  setIsTimerActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Controls: React.FC<IControlsProps> = (props) => {
  const { isTimerActive, setIsTimerActive } = props;

  return (
    <div>
      <Button
        endIcon={<PlayArrow />}
        className={styles.button}
        onClick={() => setIsTimerActive(true)}
        disabled={isTimerActive}
      >
        Play
      </Button>
      <Button
        endIcon={<Pause />}
        className={styles.button}
        onClick={() => setIsTimerActive(false)}
        disabled={!isTimerActive}
      >
        Pause
      </Button>
    </div>
  );
};

export default Controls;
