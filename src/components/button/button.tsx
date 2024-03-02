import { FC, InputHTMLAttributes } from "react";
import { StyledButton } from "./styles";
import Typography from "../typography/typography";

interface IInput extends InputHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  label: string;
}

const Button: FC<IInput> = ({ onClick = () => "", label = "default" }) => {
  return (
    <StyledButton>
      <button type="button" onClick={onClick}>
        <Typography size="subheading">{label}</Typography>
      </button>
    </StyledButton>
  );
};

export default Button;
