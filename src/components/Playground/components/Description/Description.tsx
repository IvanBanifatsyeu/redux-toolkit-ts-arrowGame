// import styles from "./Description.module.css"
import { TypographyHeader } from "../../../UI";

const Description: React.FC = () => {
  return (
    <div>
      <TypographyHeader>↑↓→← Arrow-game description</TypographyHeader>
      <span>
        Player's goal is to press the keyboard arrow key that was shown to him
        before the next one appears.
      </span>
      After three consecutive successful hits - game won, after three errors -
      lost.
      <span></span>
    </div>
  );
};

export default Description;
