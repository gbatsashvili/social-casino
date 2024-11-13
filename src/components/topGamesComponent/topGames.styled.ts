import styled from "styled-components";

export const TopGamesStyled = styled.div``;
export const FilterBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  .search {
    position: relative;
    input {
      height: 43px;
      border: none;
      background-color: ${({ theme }) => theme.colors.blackLight};
      color: ${({ theme }) => theme.colors.btnColorLight};
      border-radius: 30px;
      padding: 0 15px 0 45px;
      outline: none;
      font-weight: 600;
    }
    .icon {
      position: absolute;
      left: 15px;
      top: 8px;
    }
  }
  .filters {
    display: flex;

    .filterItem {
      cursor: pointer;
      background-color: ${({ theme }) => theme.colors.blackLight};
      padding: 12px 16px;
      border-radius: 30px;
      margin-right: 10px;
      font-weight: 600;
    }
    .selected {
      background-color: #fff;
      color: ${({ theme }) => theme.colors.text};
    }
  }
`;

export const TopGamesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const TopGamesTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .title {
    font-size: 22px;
    font-weight: bold;
  }
  .optionButtons {
    display: flex;
    align-items: center;
    .opt {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 10px;
      background-color: ${({ theme }) => theme.colors.blackLight};
      margin-left: 10px;
      &:hover {
        background-color: #555555;
        svg {
          path {
            fill: #fff;
          }
        }
      }
    }
  }
`;

export const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  margin: auto;
  overflow: hidden;
  margin-bottom: 30px;
`;

export const SlidesWrapper = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: scroll;
  scroll-behavior: smooth;
  padding: 20px 0;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const Slide = styled.div<{ bgColor: string }>`
  flex: 0 0 auto;
  width: 23.4%;
  height: 300px;
  background-color: ${(props) => props.bgColor};
  color: #fff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 18px;
`;
