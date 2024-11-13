import { Button, ButtonType } from "@/shared/button/button";
import { BannerBig, BannerSmall, BannerStyled } from "./banner.styled";
import Image from "next/image";

export const Banner = () => {
  return (
    <BannerStyled>
      <BannerSmall>
        <div className="text">Daily $10,000 spinada races</div>
        <div className="img">
          <Image
            src="/assets/money.png"
            alt="logo"
            width={150}
            height={160}
            priority
          />
        </div>
      </BannerSmall>
      <BannerBig>
        <div className="text">
          <span> get a shade of the $50,000 fund</span>
          <Button
            text="Let's Play Now"
            padding="8px 15px"
            buttonType={ButtonType.Primary}
          />
        </div>
        <div className="img">
          <Image
            src="/assets/games.png"
            alt="logo"
            width={250}
            height={200}
            priority
          />
        </div>
      </BannerBig>
    </BannerStyled>
  );
};
