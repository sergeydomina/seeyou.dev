import Hero from 'components/Home/Hero';
import Toolbar from 'components/Home/Toolbar';
import Conference from 'components/Home/Conference';
import Support from 'components/Home/Support';
import { ScrollToTop } from 'hooks/ScrollToTop';

const Home = () => {
  ScrollToTop();
  return (
    <>
      <main>
        <Hero />
        <Toolbar />
        {/* <MediaQuery device={'mobile'}>
          <FeaturesAccordion />
        </MediaQuery>
        <MediaQuery device={'tablet'}>
          <FeaturesTabs />
        </MediaQuery> */}

        <Conference />
        <Support />

        {/* <MediaQuery device={'mobile'}>
          <DownloadMobileFooter />
        </MediaQuery> */}
      </main>
    </>
  );
};
export default Home;
