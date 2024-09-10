import Carousel from "react-bootstrap/Carousel";
import pic1 from "../../../assets/carousel_pics/1.jpeg";
import pic2 from "../../../assets/carousel_pics/2.jpg";
import pic3 from "../../../assets/carousel_pics/3.jpeg";
import { Button } from "react-bootstrap";

const CustomCarousel = ({ categories }) => {
  console.log(categories);
  return (
    <Carousel fade style={{ height: "60vh" }}>
      {categories.map((item, index) => (
        <Carousel.Item key={item._id}>
          <img
            src={item.categoryThumbnail}
            className="d-block w-100"
            alt=""
            style={{
              height: "60vh",
              inlineSize: "100%",
              // aspectRatio: "16/9",
              // objectFit: "fill",
            }}
          />
          <Carousel.Caption
            style={{
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.6)", // Shadow for contrast
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Optional: Semi-transparent background
              padding: "1rem", // Optional: Padding for spacing
              borderRadius: "8px", // Optional: Rounded corners
            }}
          >
            <h3>{item.category}</h3>
            <Button variant="outline-light">Browse {item.category}</Button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CustomCarousel;
