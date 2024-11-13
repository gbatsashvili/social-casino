import styled from "styled-components";

export const LayoutStyledAside = styled.div`
  display: flex;
  flex-direction: row;
`;
export const LayoutStyledAppBar = styled.div`
  display: flex;
  flex-direction: column;
  .appbar {
    overflow-y: hidden;
    height: 100%;
  }
`;
export const MainContainer = styled.div`
  width: 100%;
  padding: 0 70px;
  overflow-y: auto;
  height: 100vh;
`;
