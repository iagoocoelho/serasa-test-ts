import { StyledToast } from "./styles";
import Typography from "../typography/typography";
import { ReactNode } from "react";

interface IToast {
  children: JSX.Element | ReactNode;
  type: "success" | "error" | "warning";
}

const Toast = ({ children, type }: IToast) => {
  return (
    <StyledToast $type={type}>
      <Typography size="headingM" $centerText>
        {children}
      </Typography>
    </StyledToast>
  );
};

export default Toast;
