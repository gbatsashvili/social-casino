import { Button, ButtonType } from "../../shared/button/button";
import { AsideLogo, SideBarStyled } from "./sidebar.styled";
import Image from "next/image";
import { SideBarNav } from "./sidebarNav";
import ThemeToggle from "@/shared/toogleTheme/toogleTheme";
import { useStore } from "@/store/store";
export const SideBar = () => {
  const configObject = useStore((state) => state.configObject);
  return (
    <SideBarStyled>
      <div className="top">
        <AsideLogo>
          <Image
            src={`${
              configObject?.logo ? configObject?.logo : "/assets/logo-1.svg"
            }`}
            alt="logo"
            width={190}
            height={44}
            priority
          />
        </AsideLogo>
        <Button
          text="Buy Coins"
          icon={
            <Image
              src="/assets/coin.svg"
              alt="logo"
              width={30}
              height={30}
              priority
            />
          }
          buttonType={ButtonType.Secondary}
        />
        <Button
          className="redeem-button"
          text="Redeem"
          buttonType={ButtonType.Text}
          padding="12px 40px"
        />
        <SideBarNav />
      </div>
      <ThemeToggle />
    </SideBarStyled>
  );
};
