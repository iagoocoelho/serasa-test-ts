import styled from "styled-components";

export const StyledToast = styled.div<{ $type: string }>`
  position: absolute;
  height: 200px;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(92, 184, 92, 0.8);
  border: 2px solid #000;
  border-radius: 8px;
`;
