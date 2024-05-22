import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setCurrentStep } from "./store/slices";
import Controls from "./components/Controls";

const Playground: React.FC = () => {
  const [isTimerActive, setIsTimerActive] = useState<boolean>(false);
  return (
    <div>
      <Controls
        isTimerActive={isTimerActive}
        setIsTimerActive={setIsTimerActive}
      />
    </div>
  );
};

export default Playground;
