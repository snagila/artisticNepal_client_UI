import Carousel from "react-bootstrap/Carousel";
import { Button, Image, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

const CustomCarousel = ({ categories }) => {
  return (
    <Carousel fade style={{ height: "88vh" }}>
      {categories.length === 0 && (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "87vh" }}
        >
          <Spinner animation="border" role="status" />
        </div>
      )}
      {categories.length > 0 &&
        categories.map((item) => (
          <Carousel.Item key={item._id}>
            <div
              style={{
                width: "100%",
                height: "88vh",
                overflow: "hidden",
              }}
            >
              <Image
                src={item.categoryThumbnail}
                className="img-fluid"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                alt={item.category}
              />
            </div>

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
