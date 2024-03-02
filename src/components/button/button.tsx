import { FC, InputHTMLAttributes } from "react";
import { StyledButton } from "./styles";
import Typography from "../typography/typography";

interface IInput extends InputHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  label: string;
  disabled?: boolean;
}

const Button: FC<IInput> = ({
  onClick = () => "",
  label = "default",
  disabled = false,
}) => {
  return (
    <StyledButton>
      <button type="button" onClick={onClick} disabled={disabled}>
        <Typography size="subheading">{label}</Typography>
      </button>
    </StyledButton>
  );
};

export default Button;
