import { CoinIcon } from "../svgComponents/CoinIcon";
import { GiftIcon } from "../svgComponents/GiftIcon";
import { HomeIcon } from "../svgComponents/Home";
import { ProfileIcon } from "../svgComponents/ProfileIcon";
import { ReceiptIcon } from "../svgComponents/ReceiptIcon";
import { SideBarNavStyled } from "./sidebar.styled";

const navData = [
  {
    icon: <HomeIcon />,
    label: "Home",
    active: true,
  },
  {
    icon: <CoinIcon />,
    label: "Store",
    active: false,
  },
  {
    icon: <ReceiptIcon />,
    label: "Redeem",
    active: false,
  },
  {
    icon: <GiftIcon />,
    label: "Rewards",
    active: false,
  },
  {
    icon: <ProfileIcon />,
    label: "Profile",
    active: false,
  },
];

export const SideBarNav = () => {
  return (
    <SideBarNavStyled>
      {navData.map((item) => {
        return (
          <div
            className={`navItem ${item.active ? "active" : ""}`}
            key={item.label}
          >
            <span className="icon">{item.icon}</span>
            <span className="label">{item.label}</span>
            {item.active && <span className="activeIndicator"></span>}
          </div>
        );
      })}
    </SideBarNavStyled>
  );
};
