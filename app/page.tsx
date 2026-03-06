import Image from "next/image";
import fashion from './assets/h2.png';
import mobile from "./assets/h1.png";
import electronics from "./assets/tv.jpg";
import grocery from "./assets/h7.png";
import toy from './assets/toy.jpg'
import home from "./assets/home.jpg";
import banner1 from "./assets/b1.png";
import banner2 from "./assets/b2.webp";
import banner3 from "./assets/b3.jpg";
import camera from "./assets/cam.jpg";
import bag from "./assets/bag.jpg";
import watch from "./assets/watch.jpg";
import budha from "./assets/budha.webp"

export default function Home() {
  return (
    <>
      <div className="container mt-4">
        <div className="row text-center">
          <div className="col">
            <Image src={fashion} width={50} alt="fashion"/>
            <p>Fashion</p>
          </div>
          <div className="col">
            <Image src={mobile} width={50} alt="mobile" />
            <p>Mobiles & Tablets</p>
          </div>
          <div className="col">
            <Image src={electronics} width={50} alt="electronics"/>
            <p>Electronics</p>
          </div>
          <div className="col">
            <Image src={home} width={50} alt="home"/>
            <p>Home&Furnishings</p>
          </div>
          <div className="col">
            <Image src={toy} width={50} alt="toys"/>
            <p>Toys & Games</p>
          </div>
          <div className="col">
            <Image src={grocery} width={50} alt="grocery"/>
            <p>Groceries</p>
          </div>
        </div>
      </div>
     <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Image src={banner1} className="d-block w-100" height={300} alt="banner1"/>
          </div>
          <div className="carousel-item">
            <Image src={banner2} className="d-block w-100" height={300} alt="banner2"/>
          </div>
          <div className="carousel-item">
            <Image src={banner3} className="d-block w-100" height={300} alt="banner3"/>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
          data-bs-interval="2000"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
     <div className="container mt-4">
        <div className="row">
            <h5 className="text-start fw-bold">Top Deals</h5>
          <div className="col-md-3 fw-bold">
            <Image src={watch} width={160} alt="watch"/>
            <p>Watches</p>
            <p className="text-primary">50% off</p>
          </div>
          <div className="col-md-3 fw-bold">
            <Image src={bag} width={160} alt="bag" />
            <p>Handbags</p>
            <p className="text-primary">upto 60% off</p>
          </div>
          <div className="col-md-3 fw-bold">
            <Image src={camera} width={160} height={160} alt="cam"/>
            <p>Cameras</p>
            <p className="text-primary">Under 3000</p>
          </div>
          <div className="col-md-3 fw-bold">
            <Image src={budha} width={160} height={160} alt="budha"/>
            <p>Home Decorations</p>
            <p className="text-primary">50% off</p>
          </div>
        </div>
      </div>

     
    </>
  );
}
