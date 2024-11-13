import {
  Copyright,
  FooterLogo,
  FooterStyled,
  FooterText,
  FooterTop,
} from "./footer.styled";
import Image from "next/image";
import { useStore } from "@/store/store";
export const Footer = () => {
  const configObject = useStore((state) => state.configObject);
  return (
    <FooterStyled>
      <FooterTop>
        <FooterLogo>
          <Image
            src={`${
              configObject?.logo ? configObject?.logo : "/assets/logo-1.svg"
            }`}
            alt="logo"
            width={190}
            height={44}
            priority
          />
        </FooterLogo>
        <FooterText>
          <div className="title"> Promoting Responsible Play for Everyone</div>
          Discover more on our dedicated Responsible Social Play page.
          <br />
          <br />
          By participating, you acknowledge and agree that the information you
          provide is for Spinada Casino. The information will only be used for
          managing this promotion. No purchase is necessary to enter the
          sweepstakes, and they are void where prohibited by law. For complete
          details and rules regarding sweepstakes, please refer to the Sweeps
          Policy.
        </FooterText>
      </FooterTop>
      <Copyright>© 2024 Spinada.com | All Rights Reserved.</Copyright>
    </FooterStyled>
  );
};
