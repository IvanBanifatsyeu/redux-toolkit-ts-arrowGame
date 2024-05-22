// import styles from "./Controls.module.css"

export interface IControlsProps {
  isTimerActive: boolean;
  setIsTimerActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Controls: React.FC<IControlsProps> = (props) => {
  const {} = props;

  return <div>Controls</div>;
};

export default Controls;
