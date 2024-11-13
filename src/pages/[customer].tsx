import { GetStaticProps, GetStaticPaths } from "next";
import { HeadComponent } from "@/components/headComponent/headComponent";
import { HomeStyled } from "@/styles/home.styled";
import { Banner } from "@/components/banner/banner";
import { TopGamesComponent } from "@/components/topGamesComponent/topGamesComp";
import { Providers } from "@/components/providers/providers";
import { useStore } from "@/store/store";
import { CustomerConfig } from "@/types/globalTypes";

const fetchCustomerConfig = (customer: string): CustomerConfig | null => {
  try {
    // Dynamically import the customer config JSON based on the customer name
    const config = require(`../configs/${customer}.json`);
    return config;
  } catch (error) {
    // Return null if the customer config does not exist
    return null;
  }
};

const CustomerPage = ({ config }: { config: CustomerConfig }) => {
  const setConfigObject = useStore((state) => state.setConfigObject);
  const configObject = useStore((state) => state.configObject);
  const showBanner =
    configObject && configObject.banner === "show"
      ? true
      : !configObject
      ? true
      : false;

  // Apply the customer config globally using zustand store
  setConfigObject(config);

  // If no config is found, render a fallback UI
  if (!config) {
    return <h1>Customer not found</h1>;
  }

  // Render customer-specific content
  return (
    <HomeStyled>
      <HeadComponent />
      {showBanner && <Banner />}
      <TopGamesComponent />
      <Providers />
    </HomeStyled>
  );
};

// Get the list of all possible customer paths at build time
export const getStaticPaths: GetStaticPaths = async () => {
  const customerNames = ["customerA", "customerB", "customerC"]; // Can be dynamically populated or fetched
  const paths = customerNames.map((customer) => ({
    params: { customer },
  }));

  return {
    paths,
    fallback: false, // Show a 404 page if the customer does not exist
  };
};

// Fetch customer-specific data at build time
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const customer = params?.customer as string; // Get the customer name from the URL params
  const config = fetchCustomerConfig(customer);

  return {
    props: {
      config,
    },
  };
};

export default CustomerPage;
