// import styles from "./Modal.module.css"
import { resetStore } from "../../store/slices";
import { useAppDispatch } from "../../../../app/hooks";
import ResultMessage from "./components/ResultMessage";

export interface IModalProps {
  setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  isSuccessEndGame: boolean;
}

const Modal: React.FC<IModalProps> = (props) => {
  const { setIsShowModal, isSuccessEndGame } = props;
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(resetStore());
    setIsShowModal(false);
  };

  return (
    <div>
      <h3>Modal</h3>
      <ResultMessage isSuccessEndGame={isSuccessEndGame} />
      <br />
      <button onClick={handleClose}>Start New Game</button>
    </div>
  );
};

export default Modal;
