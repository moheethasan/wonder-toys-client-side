const Sponsors = () => {
  return (
    <div className="bg-black mt-12">
      <h1
        className="text-center text-4xl md:text-5xl font-bold pt-16 pb-3"
        data-aos="fade-up"
      >
        <span className="title-text">Our Sponsors</span>
      </h1>
      <div
        className="grid grid-cols-2 md:grid-cols-4 items-center py-28  container mx-auto px-4"
        data-aos="fade-up"
      >
        <img
          className="w-3/5 mx-auto"
          src="https://www.majorette.com/data/Storage/Banner/0000000329/mercedes-benz.png?t=1590947887"
          alt="brand"
        />
        <img
          className="w-3/5 mx-auto"
          src="https://www.majorette.com/data/Storage/Banner/0000000330/vw.png?t=1590948005"
          alt="brand"
        />
        <img
          className="w-3/5 mx-auto"
          src="https://www.majorette.com/data/Storage/Banner/0000000332/land-rover.png?t=1590948199"
          alt="brand"
        />
        <img
          className="w-3/5 mx-auto"
          src="https://www.majorette.com/data/Storage/Banner/0000000334/man.png?t=1590948437"
          alt="brand"
        />
      </div>
    </div>
  );
};

export default Sponsors;
