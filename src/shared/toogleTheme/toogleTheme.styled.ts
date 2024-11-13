import styled from "styled-components";

export const ToggleContainer = styled.div`
  width: 100%;
  height: 40px;
  background: ${({ theme }) => theme.colors.blackLight};
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export const IconContainer = styled.div<{ active: boolean }>`
  width: 50%;
  height: 40px;
  border-radius: 30px;
  background: ${({ active }) => (active ? "#ffffff" : "transparent")};
  color: ${({ active }) => (active ? "#333" : "#ccc")};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  transition: background 0.3s ease, color 0.3s ease;
  svg {
    path {
      stroke: #565859;
      fill: #565859;
    }
    width: 20px;
    height: 20px;
  }
`;
