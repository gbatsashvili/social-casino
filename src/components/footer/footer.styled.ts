import styled from "styled-components";

export const FooterStyled = styled.div`
  background-color: ${({ theme }) => theme.colors.blackDark};
  margin: 0 -70px;
  padding: 30px 70px;
`;
export const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`;
export const FooterLogo = styled.div`
  flex-basis: 30%;
`;
export const FooterText = styled.div`
  flex-basis: 52%;
  font-size: 14px;
  line-height: 20px;
  .title {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 8px;
  }
`;
export const Copyright = styled.div`
  font-size: 16px;
  text-align: center;
`;
