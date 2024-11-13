import {
  IconContainer,
  ToggleContainer,
} from "@/shared/toogleTheme/toogleTheme.styled";
import styled from "styled-components";

export const HeaderStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 70px 10px 70px;
  .flex {
    display: flex;
    align-items: center;
  }
`;
export const HeaderNav = styled.div`
  display: flex;
  align-items: center;
  .headNavItem {
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    margin-right: 30px;
    &:hover {
      color: ${({ theme }) => theme.colors.blue};
    }
  }
  .active {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

export const ThemeChange = styled.div`
  width: 100px;
  ${ToggleContainer} {
    height: 30px;
  }
  ${IconContainer} {
    height: 30px;
  }
`;
