import {
  LogoImage,
  LogoItem,
  LogoTrack,
  RunningLineContainer,
} from "./runningLine.styled";

const logos = [
  "https://cdn.prod.website-files.com/670f797630325ed83a4be58a/67114975650b88cd489c0cea_g10.svg",
  "https://cdn.prod.website-files.com/670f797630325ed83a4be58a/67114990853699be7d98cab5_rubyplay.svg",
  "https://cdn.prod.website-files.com/670f797630325ed83a4be58a/671149b2340fd43dab9ef860_Evoplay-Logo.svg",
  "https://cdn.prod.website-files.com/670f797630325ed83a4be58a/671149d7dd75ef1ea08c7a6c_BGaming_logo%20.svg",
  "https://cdn.prod.website-files.com/670f797630325ed83a4be58a/67114975650b88cd489c0cea_g10.svg",
  "https://cdn.prod.website-files.com/670f797630325ed83a4be58a/67114990853699be7d98cab5_rubyplay.svg",
  "https://cdn.prod.website-files.com/670f797630325ed83a4be58a/671149b2340fd43dab9ef860_Evoplay-Logo.svg",
  "https://cdn.prod.website-files.com/670f797630325ed83a4be58a/671149d7dd75ef1ea08c7a6c_BGaming_logo%20.svg",
];

export const RunningLine = () => {
  return (
    <RunningLineContainer>
      <LogoTrack>
        {/* Repeat logos twice for seamless looping */}
        {logos.concat(logos).map((logo, index) => (
          <LogoItem key={index}>
            <LogoImage src={logo} alt={`Logo ${index + 1}`} />
          </LogoItem>
        ))}
      </LogoTrack>
    </RunningLineContainer>
  );
};
