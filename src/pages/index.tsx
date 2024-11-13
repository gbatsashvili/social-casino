import { Banner } from "@/components/banner/banner";
import { HeadComponent } from "@/components/headComponent/headComponent";
import { HomeStyled } from "@/styles/home.styled";
import { TopGamesComponent } from "@/components/topGamesComponent/topGamesComp";
import { Providers } from "@/components/providers/providers";

export default function Home() {
  return (
    <HomeStyled>
      <HeadComponent />
      <Banner />
      <TopGamesComponent />
      <Providers />
    </HomeStyled>
  );
}
