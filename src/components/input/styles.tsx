import styled from "styled-components";

export const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${({ theme }) => theme.spacing.medium} 0;

  > input {
    padding: 5px;
    margin-top: ${({ theme }) => theme.spacing.small} ;
  }
`;
