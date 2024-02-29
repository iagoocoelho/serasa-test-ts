import { ReactNode } from 'react'
import { StyledTypography } from './styles'

export interface TypographyProps {
  children: JSX.Element | ReactNode
  size:  
  | "display"
  | "headingL"
  | "headingM"
  | "headingS"
  | "headingXS"
  | "subheading"
  | "bodyM";
}

const Typography = ({ children, size = 'bodyM' } : TypographyProps) => {
  return (
    <StyledTypography size={size}>{children}</StyledTypography>
  )
}

export default Typography;