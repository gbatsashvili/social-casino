import { ReactNode } from "react";
import { ButtonStyled } from "./button.styled";

export enum ButtonType {
  Primary = "primary",
  Secondary = "secondary",
  Text = "text",
}
export interface IButtonProps {
  className?: string;
  text?: string;
  bg?: string;
  icon?: ReactNode;
  height?: string;
  padding?: string;
  color?: string;
  buttonType?: ButtonType;
}

export const Button = (props: IButtonProps) => {
  const {
    className,
    text,
    bg,
    icon,
    height,
    padding,
    color,
    buttonType = ButtonType.Text,
  } = props;
  return (
    <ButtonStyled
      buttonType={buttonType || ""}
      className={className}
      bg={bg}
      height={height}
      padding={padding}
      color={color}
    >
      {icon && <span className="icon">{icon}</span>}
      <span>{text}</span>
    </ButtonStyled>
  );
};
