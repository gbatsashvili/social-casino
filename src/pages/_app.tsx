import StyledComponentsRegistry from "@/lib/styledRegistry";
import GlobalStyle from "@/styles/globalStyles";
import { getLayout, LayoutEnum } from "@/shared/layout/layout";
import { Footer } from "@/components/footer/footer";
import { ThemeProvider } from "@/lib/themeProvider";
import { useStore } from "@/store/store";
import { useEffect, useState } from "react";
import FullPageLoader from "@/components/pageLoader/pageLoader";

function App({ Component, pageProps }: any) {
  const [isLoading, setIsLoading] = useState(true);
  const [isHydrated, setIsHydrated] = useState(false);
  // Determine the behavior of the layout either from global config if selected customer or the default sidebar style
  const configObject = useStore((state) => state.configObject);
  const Layout = getLayout(configObject?.layout || LayoutEnum.sidebar);
  const showFooter =
    configObject && configObject.footer === "show"
      ? true
      : !configObject
      ? true
      : false;

  useEffect(() => {
    //check hydration
    setIsHydrated(true);
    // Simulate a delay to demonstrate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isHydrated || isLoading) {
    // Show the loading component until hydration is complete and loading
    return <FullPageLoader />;
  }

  return (
    <StyledComponentsRegistry>
      <ThemeProvider>
        <GlobalStyle />

        <Layout>
          <>
            <Component {...pageProps} />
            {showFooter ? <Footer /> : <></>}
          </>
        </Layout>
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}

export default App;
