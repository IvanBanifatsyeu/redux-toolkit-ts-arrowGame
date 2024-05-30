// import styles from "./Score.module.css"

import { useAppSelector } from "../../../../app/hooks";

const Score: React.FC = () => {
  const state = useAppSelector((state) => state.playground);

  return (
    <div>
      <h3>Score</h3>
      <span>Errors: {state.totalUnsuccessful}</span>
      <br />
      <span>Successful: {state.totalSuccessful}</span>
    </div>
  );
};

export default Score;
