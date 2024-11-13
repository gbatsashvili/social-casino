import { AssetToggleComp } from "./assetToggle";
import {
  HeadComponentStyled,
  HeadRightSection,
  ProfileComp,
} from "./head.styled";
import Image from "next/image";
import { Button, ButtonType } from "@/shared/button/button";
import { ProfileIcon } from "../svgComponents/ProfileIcon";
export const HeadComponent = () => {
  return (
    <HeadComponentStyled>
      <AssetToggleComp />
      <HeadRightSection>
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
          padding="12px 10px"
        />
        <ProfileComp>
          <ProfileIcon />
        </ProfileComp>
      </HeadRightSection>
    </HeadComponentStyled>
  );
};
