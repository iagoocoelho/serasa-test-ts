import styled from "styled-components";
import { theme } from "../../themeStyles";
import SerasaLogoWhite from "../../assets/serasa-logo-full-white";

const StyledHeader = styled.header`
  background-color: ${theme.colors.magenta};
  display: flex;
  justify-content: space-between;

  > h1 {
    color: ${theme.colors.lightSolid};
  }
`;

export const Header = ({ title = "" }) => {
  return (
    <StyledHeader>
      <h1>{title}</h1>
      <SerasaLogoWhite height="100px" width="200px" />
    </StyledHeader>
  );
};
