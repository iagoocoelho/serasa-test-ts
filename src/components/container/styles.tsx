import styled from "styled-components";
import { ISectionContainer } from "./sectionContainer";

export const StyledSectionContainer = styled.section<ISectionContainer>`
  // mobile
  @media only screen and (max-width: 600px) {
    margin-top: ${({ theme }) => theme.spacing.medium};
  }

  // desktop
  @media only screen and (min-width: 601px) {
    margin-top: ${({ theme }) => theme.spacing.large};
  }
`;
