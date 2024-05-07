import '../styles/globals.css';
import '../styles/styles.scss';
import '../styles/baloons.css';
import {
  LocomotiveScrollProvider,
  useLocomotiveScroll,
} from 'react-locomotive-scroll';
import { useEffect, useRef, useState } from 'react';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import ScrollTriggerProxy from '../utils/ScrollTriggerProxy';
import { useRouter } from 'next/router';
import Layout from '../transition/Layouts/Layout';
import 'swiper/css';
import { ApolloProvider } from '@apollo/client';
import { client } from '../graphql/client';
import { SortProvider } from '../contexts/SortContext';
import Navbar from '../components/Navbar';
import { ThemeProvider } from 'next-themes';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { dark } from '../styles/Themes';
import { StyledEngineProvider } from '@mui/material/styles';
import SlidingText3D from '../components/SlidingText3D';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps, apollo = client  }) {
  const router = useRouter();
  const currentRoute = router.pathname;
  const containerRef = useRef(null);
  const { asPath } = useRouter(); // With next/router
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);   
  }, []);

  return (
    <ApolloProvider client={apollo}>
      <SortProvider>
        <ThemeProvider attribute='class'>
          <StyledThemeProvider theme={dark}>
            <StyledEngineProvider injectFirst>
              <LocomotiveScrollProvider
                options={{
                  smooth: true,
                  smartphone: {
                    smooth: true,
                  },
                  tablet: {
                    smooth: true,
                  },

                  // ... all available Locomotive Scroll instance options
                }}
                location={asPath}
                watch={
                  [
                    //..all the dependencies you want to watch to update the scroll.
                    //  Basicaly, you would want to watch page/location changes
                    //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
                  ]
                }
                onLocationChange={(scroll) =>
                  scroll.scrollTo(0, { duration: 0, disableLerp: true })
                } // If you want to reset the scroll position to 0 for example
                containerRef={containerRef}
              >
                <ScrollTriggerProxy />
                <Navbar />
                <main data-scroll-container ref={containerRef} className='App'>
                  {isClient ? (
                    <Layout>
                      <Component {...pageProps} />
                    </Layout>
                  ) : (
                    'WG LOADING...'
                  )}
                  <SlidingText3D currentRoute={currentRoute} />
                  {currentRoute === '/' ? <Footer /> : ''}
                </main>
              </LocomotiveScrollProvider>
            </StyledEngineProvider>
          </StyledThemeProvider>
        </ThemeProvider>
      </SortProvider>
    </ApolloProvider>
  );
}

export default MyApp;
