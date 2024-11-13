import { useRef, useState } from "react";
import {
  FilterBar,
  Slide,
  SliderContainer,
  SlidesWrapper,
  TopGamesContainer,
  TopGamesStyled,
  TopGamesTitle,
} from "./topGames.styled";
import Image from "next/image";
import { ArrowLeft } from "../svgComponents/ArrowLeft";
import { ArrowRight } from "../svgComponents/ArrowRight";

const filtersData = [
  {
    id: 1,
    label: "All Game",
  },
  {
    id: 2,
    label: "Home",
  },
  {
    id: 3,
    label: "Prize Drops",
  },
  {
    id: 4,
    label: "Popular",
  },
  {
    id: 5,
    label: "New",
  },
  {
    id: 6,
    label: "Low Spins",
  },
  {
    id: 7,
    label: "Classic Slots",
  },
  {
    id: 8,
    label: "Hold & Win",
  },
  {
    id: 9,
    label: "Jackpot",
  },
];

interface Slide {
  id: number;
  title: string;
  bgColor: string;
}

const slides: Slide[] = [
  { id: 1, title: "Fruit Diamonds", bgColor: "#c73" },
  { id: 2, title: "Immortal Ways", bgColor: "#3b7" },
  { id: 3, title: "Alien Fruits", bgColor: "#73c" },
  { id: 4, title: "888 Dragons", bgColor: "#c37" },
  { id: 5, title: "Dragon Pearl", bgColor: "#7a3" },
  { id: 6, title: "Sun of Egypt", bgColor: "#f77" },
  { id: 7, title: "Wild Cash", bgColor: "#f99" },
  { id: 8, title: "Lucky Fortune", bgColor: "#39f" },
  { id: 9, title: "Magic Moon", bgColor: "#36a" },
  { id: 10, title: "Treasure Hunt", bgColor: "#b37" },
];

export const TopGamesComponent = () => {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(1);

  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollToNext = () => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.clientWidth / 4;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const scrollToPrev = () => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.clientWidth / 4;
      sliderRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const filterSlides = slides.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <TopGamesStyled>
      <FilterBar>
        <div className="search">
          <span className="icon">
            <Image
              src="/assets/search.svg"
              alt="logo"
              width={25}
              height={25}
              priority
            />
          </span>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for game... "
          />
        </div>
        <div className="filters">
          {filtersData.map((item) => {
            return (
              <div
                className={`filterItem ${
                  item.id === selected ? "selected" : ""
                }`}
                onClick={() => setSelected(item.id)}
                key={item.id}
              >
                {item.label}
              </div>
            );
          })}
        </div>
      </FilterBar>
      <TopGamesContainer>
        <TopGamesTitle>
          <div className="title">Top 10 Games</div>
          <div className="optionButtons">
            <div className="opt prev" onClick={scrollToPrev}>
              <ArrowLeft />
            </div>
            <div className="opt next" onClick={scrollToNext}>
              <ArrowRight />
            </div>
          </div>
        </TopGamesTitle>

        <SliderContainer>
          <SlidesWrapper ref={sliderRef}>
            {filterSlides.map((slide) => (
              <Slide key={slide.id} bgColor={slide.bgColor}>
                <div>{slide.title}</div>
              </Slide>
            ))}
          </SlidesWrapper>
        </SliderContainer>
      </TopGamesContainer>
    </TopGamesStyled>
  );
};
