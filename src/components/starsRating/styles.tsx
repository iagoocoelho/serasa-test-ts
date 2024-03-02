import styled from "styled-components";

export const StyledStarsRating = styled.div`
  display: flex;
  justify-content: center;
  margin: ${({ theme }) => theme.spacing.medium} 0;

  button {
    background: transparent;
    border-color: transparent;
    border-radius: 30px;
    cursor: pointer;
    width: 50px;
    height: 50px;
    line-height: 45px;

    span {
      font-size: 40px;

      &.aria-label-star {
        color: transparent;
        font-size: 0;
      }
    }

    &.on {
      color: #efce4a;
    }

    &.off {
      color: #ccc;
    }
  }
`;
