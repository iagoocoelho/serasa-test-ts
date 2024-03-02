import { ReactNode } from "react";
import { StyledSectionContainer } from './styles'

export interface ISectionContainer {
  children: JSX.Element | ReactNode;
}

const SectionContainer = ({ children }: ISectionContainer) => {
  return (<StyledSectionContainer>{children}</StyledSectionContainer>);
};

export default SectionContainer;
