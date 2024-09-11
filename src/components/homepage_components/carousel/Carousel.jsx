import Carousel from "react-bootstrap/Carousel";
import { Button } from "react-bootstrap";

const CustomCarousel = ({ categories }) => {
  return (
    <Carousel fade style={{ height: "60vh" }}>
      {categories.map((item) => (
        <Carousel.Item key={item._id}>
          <img
            src={item.categoryThumbnail}
            className="d-block w-100"
            alt=""
            style={{
              height: "60vh",
              inlineSize: "100%",
            }}
          />
          <Carousel.Caption
            style={{
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.6)",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              padding: "1rem",
              borderRadius: "8px",
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
