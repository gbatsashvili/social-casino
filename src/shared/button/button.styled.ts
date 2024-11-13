import styled, { css } from "styled-components";
import { ButtonType, IButtonProps } from "./button";

export const ButtonStyled = styled.button<IButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${({ height }) => height || "auto"};
  color: ${({ color, theme }) => color || theme.colors.text};
  font-weight: bold;
  border-radius: 30px;
  padding: ${({ padding }) => padding || "8px 40px"};
  background-color: ${({ bg }) => bg || "transparent"};
  .icon {
    margin-right: 8px;
    width: 30px;
    height: 30px;
    display: inline-block;
  }
  ${(props) =>
    props.buttonType === ButtonType.Primary &&
    css`
      background-color: ${({ theme }) => theme.colors.buttonPrimary};
      color: ${({ theme }) => theme.colors.white};
      border: none;
      &:hover {
        background-color: ${({ theme }) => theme.colors.blackDark};
      }
    `}
  ${(props) =>
    props.buttonType === ButtonType.Secondary &&
    css`
      background-color: ${({ theme }) => theme.colors.buttonSecondary};
      color: ${({ theme }) => theme.colors.btnColorDark};
      border: none;
      &:hover {
        opacity: 0.89;
      }
    `}
    ${(props) =>
    props.buttonType === ButtonType.Text &&
    css`
      background-color: transparent;
      border: 1.5px solid ${({ theme }) => theme.colors.lightGrey};
      color: ${({ theme }) => theme.colors.btnColorLight};
      &:hover {
        opacity: 0.89;
      }
    `}
`;
