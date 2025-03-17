// import WildImage from './assets/assets/img/high-resolution.jpg';

import Footer from "./components/footer";
import Header from "./components/header";
import HeroSection from "./components/hero-section";
import Preloader from "./components/preloader";
import LiveProduct from "./components/product/live-product";
import PopularProduct from "./components/product/popular-product";
import SidebarProduct from "./components/product/sidebarProduct";
import TrendingProduct from "./components/product/trending-product";
import SearchModel from "./components/search-model";

function App() {
  return (
    <>
      {/* Page Preloder */}
      <Preloader />
      {/* Header Section Begin */}
      <Header />
      {/* Header End */}
      {/* Hero Section Begin */}
      <HeroSection />
      {/* Hero Section End */}
      {/* Product Section Begin */}
      <section className="product spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <TrendingProduct />
              <LiveProduct />
              <PopularProduct />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8">
              <SidebarProduct />
            </div>
          </div>
        </div>
      </section>
      {/* Product Section End */}
      {/* Footer Section Begin */}
      <Footer />
      {/* Footer Section End */}
      {/* Search model Begin */}
      <SearchModel />
      {/* Search model end */}
      {/* Js Plugins */}
    </>
  );
}

export default App;
