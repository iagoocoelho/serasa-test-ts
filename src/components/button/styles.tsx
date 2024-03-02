import styled from "styled-components";

export const StyledButton = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${({ theme }) => theme.spacing.medium} 0;

  > button {
    padding: 5px;
  }
`;
