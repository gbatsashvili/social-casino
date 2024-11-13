import { RunningLine } from "../runningLine/runningLine";
import { ProviderStyled, ProviderTitle } from "./providers.styled";

export const Providers = () => {
  return (
    <ProviderStyled>
      <ProviderTitle>Providers</ProviderTitle>
      <RunningLine />
    </ProviderStyled>
  );
};
