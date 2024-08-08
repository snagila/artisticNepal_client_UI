import Carousel from "react-bootstrap/Carousel";
import pic1 from "../../../assets/carousel_pics/1.jpeg";
import pic2 from "../../../assets/carousel_pics/2.jpg";
import pic3 from "../../../assets/carousel_pics/3.jpeg";
import pic4 from "../../../assets/carousel_pics/4.avif";

const CustomCarousel = () => {
  return (
    <Carousel fade style={{ height: "60vh" }}>
      <Carousel.Item>
        <img
          src={pic1}
          className="d-block w-100"
          alt=""
          style={{ height: "60vh" }}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={pic2}
          className="d-block w-100"
          alt=""
          style={{ height: "60vh", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={pic3}
          className="d-block w-100"
          alt=""
          style={{ height: "60vh", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={pic4}
          className="d-block w-100"
          alt=""
          style={{ height: "60vh", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CustomCarousel;
