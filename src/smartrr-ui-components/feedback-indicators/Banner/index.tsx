import { Banner as PolarisBanner } from "@shopify/polaris";

const Banner = () => {
  return (
    <PolarisBanner title="Order archived" onDismiss={() => {}}>
      <p>This order was archived on March 7, 2017 at 3:12pm EDT.</p>
    </PolarisBanner>
  );
};

export default Banner;
