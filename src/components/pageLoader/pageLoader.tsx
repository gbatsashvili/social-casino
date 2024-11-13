import React from "react";
import { Overlay } from "./pageLoader.styled";
import Image from "next/image";

const FullPageLoader: React.FC = ({}) => {
  return (
    <Overlay>
      <Image
        src="/assets/loading.svg"
        alt="logo"
        width={80}
        height={80}
        priority
      />
    </Overlay>
  );
};

export default FullPageLoader;
