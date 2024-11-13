import styled from "styled-components";

export const HeadComponentStyled = styled.div`
  display: flex;
  width: 100%;
  padding: 30px 0 20px 0;
  justify-content: space-between;
`;

export const AssetToogleComponent = styled.div`
  display: flex;
  position: relative;
  margin-left: -230px;
  left: 50%;
  .right {
    justify-content: flex-end;
    .icon {
      margin: 0 0 0 10px;
    }
  }
`;
export const AssetItem = styled.div<{ active?: boolean }>`
  height: 50px;
  width: 220px;
  background-color: ${({ theme, active }) =>
    active ? theme.colors.green : theme.colors.blackDark};

  border-radius: 30px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  .icon {
    padding-top: 5px;
    margin: 0 10px 0 0;
  }
  .amount {
    color: ${({ active, theme }) =>
      active ? "#cfe8e3" : theme.colors.btnColorLight};
  }
`;
export const AssetToggle = styled.div`
  position: absolute;
  left: 50%;
  right: 0;
  top: -2px;
  margin-left: -50px;
`;

export const AssetsToggleContainer = styled.div`
  width: 100px;
  height: 54px;
  background: ${({ theme }) => theme.colors.blackDark};
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.green};
  padding: 2px;
`;

export const AssetsIconContainer = styled.div<{ active: boolean }>`
  width: 46px;
  height: 46px;
  border-radius: 30px;
  background: ${({ active, theme }) =>
    active ? theme.colors.green : "transparent"};
  color: ${({ active, theme }) =>
    active ? "#cfe8e3" : theme.colors.lightGrey};
  display: flex;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
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

export const HeadRightSection = styled.div`
  display: flex;
  align-items: center;
  justify-self: flex-end;
`;
export const ProfileComp = styled.div`
  margin-left: 10px;
  padding: 16px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.blackLight};
  svg {
    path {
      fill: #fff;
    }
  }
`;
