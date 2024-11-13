import styled from "styled-components";

export const SideBarStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.blackDark};
  padding: 40px 10px;
  height: 100vh;
  min-width: 240px;
  .redeem-button {
    margin: 8px 0 15px 0;
  }
`;
export const AsideLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const SideBarNavStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  overflow: hidden;
  border-top: 1px solid #333;
  border-bottom: 1px solid #333;
  padding: 15px 0;

  .navItem {
    display: flex;
    align-items: center;
    padding: 14px;
    font-size: 13px;
    cursor: pointer;

    .icon {
      margin-right: 10px;
      width: 20px;
      height: 20px;
    }
    svg {
      path {
        fill: #fff;
      }
    }
    &:hover {
      background-color: #c8e1ff;
      color: ${({ theme }) => theme.colors.blue};
      border-radius: 10px;
      svg {
        path {
          fill: ${({ theme }) => theme.colors.blue};
        }
      }
    }
  }
  .active {
    background-color: #c8e1ff;
    color: ${({ theme }) => theme.colors.blue};
    border-radius: 10px;
    svg {
      path {
        fill: ${({ theme }) => theme.colors.blue} !important;
      }
    }
  }
  .activeIndicator {
    width: 6px;
    height: 15px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.blue};
    position: absolute;
    right: -1px;
  }
`;
