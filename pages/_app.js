import '../styles/globals.scss'
import {DefaultSeo} from 'next-seo';
import SEO from '../next-seo.config';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import NowPlaying from '../components/Spotify/NowPlaying';
import Contact from '../components/Contact/Contact';

function MyApp({Component, pageProps}) {
  return (
    <>
      <DefaultSeo {...SEO}/>
      <Header/>
      <NowPlaying />
      <Contact />
      <Component {...pageProps}/>
      <Footer/>
    </>
  );
}

export default MyApp
