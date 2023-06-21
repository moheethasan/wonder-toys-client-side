import img1 from "../../../assets/img1.avif";
import img2 from "../../../assets/img2.avif";
import img3 from "../../../assets/img3.avif";
import img4 from "../../../assets/img4.jpg";
import img5 from "../../../assets/img5.avif";
import img6 from "../../../assets/img6.jpg";
import img7 from "../../../assets/img7.avif";
import img8 from "../../../assets/img8.avif";
import img9 from "../../../assets/img9.avif";
import img10 from "../../../assets/img10.avif";
import img11 from "../../../assets/img11.avif";
import img12 from "../../../assets/img12.avif";

const Gallery = () => {
  return (
    <div className="container mx-auto px-4 pt-0 pb-6 md:py-12 overflow-hidden">
      <h1
        className="text-center text-4xl md:text-5xl font-bold pb-3"
        data-aos="fade-up"
      >
        <span className="title-text">Products Gallery</span>
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-1 my-10 md:my-20">
        <div className="shadow-lg hover:shadow-2xl" data-aos="fade-right">
          <img className="w-full rounded-tl-3xl" src={img1} alt="car" />
        </div>
        <div className="shadow-lg hover:shadow-2xl" data-aos="fade-up">
          <img
            className="w-full rounded-tr-3xl md:rounded-tr-none"
            src={img5}
            alt="car"
          />
        </div>
        <div className="shadow-lg hover:shadow-2xl" data-aos="fade-left">
          <img className="w-full md:rounded-tr-3xl" src={img11} alt="car" />
        </div>
        <div className="shadow-lg hover:shadow-2xl" data-aos="fade-right">
          <img className="w-full" src={img8} alt="car" />
        </div>
        <div className="shadow-lg hover:shadow-2xl" data-aos="fade-down">
          <img className="w-full" src={img9} alt="car" />
        </div>
        <div className="shadow-lg hover:shadow-2xl" data-aos="fade-left">
          <img className="w-full" src={img10} alt="car" />
        </div>
        <div className="shadow-lg hover:shadow-2xl" data-aos="fade-right">
          <img className="w-full" src={img4} alt="car" />
        </div>
        <div className="shadow-lg hover:shadow-2xl" data-aos="fade-up">
          <img className="w-full" src={img12} alt="car" />
        </div>
        <div className="shadow-lg hover:shadow-2xl" data-aos="fade-left">
          <img className="w-full" src={img6} alt="car" />
        </div>
        <div className="shadow-lg hover:shadow-2xl" data-aos="fade-right">
          <img className="w-full md:rounded-bl-3xl" src={img2} alt="car" />
        </div>
        <div className="shadow-lg hover:shadow-2xl" data-aos="fade-down">
          <img
            className="w-full rounded-bl-3xl md:rounded-bl-none"
            src={img3}
            alt="car"
          />
        </div>
        <div className="shadow-lg hover:shadow-2xl" data-aos="fade-left">
          <img className="w-full rounded-br-3xl" src={img7} alt="car" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
