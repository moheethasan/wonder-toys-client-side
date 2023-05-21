import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import NewlyArrivedToys from "../NewlyArrivedToys/NewlyArrivedToys";
import Services from "../Services/Services";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import Sponsors from "../Sponsors/Sponsors";

const Home = () => {
  return (
    <>
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
