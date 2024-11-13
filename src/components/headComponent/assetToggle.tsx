import { useState } from "react";
import { DaimondIcon } from "../svgComponents/Daimond";
import { UsdIcon } from "../svgComponents/USDIcon";
import {
  AssetItem,
  AssetsIconContainer,
  AssetsToggleContainer,
  AssetToggle,
  AssetToogleComponent,
} from "./head.styled";
export const AssetToggleComp = () => {
  const [activeAsset, setActiveAsset] = useState<"coin" | "fiat">("coin");

  const toogleAsset = () => {
    setActiveAsset((prev) => (prev === "coin" ? "fiat" : "coin"));
  };
  return (
    <AssetToogleComponent>
      <AssetItem active={activeAsset === "coin"}>
        <div className="icon">
          <DaimondIcon />
        </div>
        <div className="amount">2,000,000,000</div>
      </AssetItem>
      <AssetToggle>
        <AssetsToggleContainer onClick={toogleAsset}>
          <AssetsIconContainer active={activeAsset === "coin"}>
            G
          </AssetsIconContainer>
          <AssetsIconContainer active={activeAsset === "fiat"}>
            S
          </AssetsIconContainer>
        </AssetsToggleContainer>
      </AssetToggle>
      <AssetItem className="right" active={activeAsset === "fiat"}>
        <div className="amount">2,455</div>
        <div className="icon">
          <UsdIcon />
        </div>
      </AssetItem>
    </AssetToogleComponent>
  );
};
