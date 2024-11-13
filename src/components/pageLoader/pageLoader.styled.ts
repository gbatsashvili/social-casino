import styled, { keyframes } from "styled-components";

export const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #eef7ff;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;
