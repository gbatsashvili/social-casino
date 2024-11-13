import { HeaderNav, HeaderStyled, ThemeChange } from "./header.styled";
import Image from "next/image";
import { useStore } from "@/store/store";
import ThemeToggle from "@/shared/toogleTheme/toogleTheme";

const navData = [
  {
    label: "Home",
    isActive: true,
  },
  {
    label: "Store",
    isActive: false,
  },
  {
    label: "Redeem",
    isActive: false,
  },
  {
    label: "Rewards",
    isActive: false,
  },
  {
    label: "My Profile",
    isActive: false,
  },
];
export const Header = () => {
  const configObject = useStore((state) => state.configObject);
  return (
    <HeaderStyled>
      <Image
        src={`${
          configObject?.logo ? configObject?.logo : "/assets/logo-1.svg"
        }`}
        alt="logo"
        width={190}
        height={44}
        priority
      />
      <div className="flex">
        <HeaderNav>
          {navData.map((item) => {
            return (
              <div
                className={`headNavItem ${item.isActive ? "active" : ""}`}
                key={item.label}
              >
                {item.label}
              </div>
            );
          })}
        </HeaderNav>
        <ThemeChange>
          <ThemeToggle />
        </ThemeChange>
      </div>
    </HeaderStyled>
  );
};
