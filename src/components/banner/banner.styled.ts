import styled from "styled-components";

export const BannerStyled = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
`;
export const BannerSmall = styled.div`
  display: flex;
  flex-basis: 29%;
  flex-direction: column;
  background-color: #0091f5;
  border-radius: 20px;
  padding: 20px;
  margin-right: 10px;
  .text {
    font-weight: 600;
    font-size: 30px;
    text-transform: uppercase;
  }
  .img {
    justify-content: flex-end;
    display: flex;
  }
`;
export const BannerBig = styled.div`
  display: flex;
  justify-content: space-between;
  flex-basis: 69%;
  background-color: #05a082;
  border-radius: 20px;
  padding: 20px;
  button {
    max-width: 150px;
  }
  .text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-weight: 600;
    font-size: 30px;
    text-transform: uppercase;
  }
  .img {
    img {
      width: auto;
      height: 100%;
    }
  }
`;
