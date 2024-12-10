import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Articles from './components/FeaturedArticles/Articles'
import Products from './components/InterestedProducts/Products';
import Services from './components/OurServices/Services';
import Footer from './components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Articles />
      <Products />
      <Services />
      <Footer />
    </>
  );
}
