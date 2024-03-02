import { ReactNode } from "react";
import { StyledTypography } from "./styles";
export interface ITypography {
  children: JSX.Element | ReactNode;
  size:
    | "display"
    | "headingL"
    | "headingM"
    | "headingS"
    | "headingXS"
    | "subheading"
    | "bodyM";
  $centerText?: boolean;
  $spacingY?: "small" | "medium" | "large";
}

const Typography = ({
  children,
  size = "bodyM",
  $centerText = false,
  $spacingY,
}: ITypography) => {
  return (
    <StyledTypography size={size} $centerText={$centerText} $spacingY={$spacingY}>
      {children}
    </StyledTypography>
  );
};

export default Typography;
