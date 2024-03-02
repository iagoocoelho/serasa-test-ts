import { FC, InputHTMLAttributes } from "react";
import { StyledInput } from "./styles";
import Typography from "../typography/typography";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  value: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setState: React.Dispatch<React.SetStateAction<any>>;
}

const TextInput: FC<IInput> = ({
  name = "default",
  label = "default",
  setState,
  value = "",
}) => {
  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setState((prevState: any) => {
      return { ...prevState, [name]: e.target.value };
    });
  };

  return (
    <StyledInput>
      <Typography size="subheading">
        <label htmlFor={name}>{label}</label>
      </Typography>

      <input
        type="text"
        id={name}
        name={name}
        onChange={changeValue}
        value={value}
      />
    </StyledInput>
  );
};

export default TextInput;
