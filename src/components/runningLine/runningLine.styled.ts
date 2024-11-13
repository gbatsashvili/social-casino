import styled, { keyframes } from "styled-components";

export const scrollAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

export const RunningLineContainer = styled.div`
  overflow: hidden;
  width: 100%;
`;

export const LogoTrack = styled.div`
  display: flex;
  width: calc(200%);
  animation: ${scrollAnimation} 20s linear infinite;
`;

export const LogoItem = styled.div`
  flex: 0 0 auto;
  width: 150px;
  margin: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.8;
  border: 1px solid #565859;
  border-radius: 15px;
  padding: 10px 20px;
`;

export const LogoImage = styled.img`
  max-width: 100%;
  height: auto;
`;
