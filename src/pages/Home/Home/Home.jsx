import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import NewlyArrivedToys from "../NewlyArrivedToys/NewlyArrivedToys";
import Services from "../Services/Services";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import Sponsors from "../Sponsors/Sponsors";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, once: false });
  }, []);

  return (
    <>
      <Helmet>
        <title>Wonder Toys | Home</title>
      </Helmet>
      <Banner></Banner>
      <Gallery></Gallery>
      <ShopByCategory></ShopByCategory>
      <NewlyArrivedToys></NewlyArrivedToys>
      <Sponsors></Sponsors>
      <Services></Services>
    </>
  );
};

export default Home;
