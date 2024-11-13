import {
  LayoutStyledAppBar,
  LayoutStyledAside,
  MainContainer,
} from "./layout.styled";
import { Header } from "../../components/header/header";
import { SideBar } from "../../components/sidebar/sidebar";

export enum LayoutEnum {
  sidebar = "sidebar",
  appbar = "appbar",
}

export const getLayout = (layout: LayoutEnum) => {
  switch (layout) {
    case "sidebar":
      return SidebarLayout;
    case "appbar":
      return AppBarLayout;
    default:
      return SidebarLayout;
  }
};

export const SidebarLayout = ({ children }: { children?: JSX.Element }) => (
  <LayoutStyledAside>
    {/* Sidebar */}
    <SideBar />
    <MainContainer>{children}</MainContainer>
  </LayoutStyledAside>
);

export const AppBarLayout = ({ children }: { children?: JSX.Element }) => (
  <LayoutStyledAppBar>
    {/* App Bar */}
    <Header />
    <MainContainer className="appbar">{children}</MainContainer>
  </LayoutStyledAppBar>
);
