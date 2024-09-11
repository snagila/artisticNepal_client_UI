import Carousel from "react-bootstrap/Carousel";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

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
              objectFit: "cover",
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
            <Link to={`/products/${item.category}`}>
              <Button variant="outline-light">Browse {item.category}</Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CustomCarousel;
