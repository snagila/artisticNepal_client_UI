import React, { useEffect, useState } from "react";
import "./productPage.css";
import { useParams } from "react-router-dom";
import { getAProductAction } from "../../redux/productRedux/productActions";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/homepage_components/header/Header";
import {
  Button,
  Col,
  Container,
  Form,
  Image,
  Row,
  Spinner,
} from "react-bootstrap";
import { FaHeart } from "react-icons/fa";
import ScrollTable from "../../components/reusable_Components/scrollableTable/ScrollTable";
import { addItemsToCartActions } from "../../redux/cartItemRedux/cartItemsActions";
import { setCartItems } from "../../redux/cartItemRedux/cartItemsSlice";
import { toast } from "react-toastify";

const ProductPage = () => {
  const { isLoading } = useSelector((state) => state.helper);
  const { cartItems } = useSelector((state) => state.cart);

  const [productPicDisplay, setProductPicDisplay] = useState("");
  const [selectedQuantity, setSelectedQuantity] = useState("1");
  const { user } = useSelector((state) => state.user);

  const selectQuantity = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const dispatch = useDispatch();
  const { product, products } = useSelector((state) => state.product);

  const [productDescription, setProductDescription] = useState("");
  const { id } = useParams();

  const similarCategoryProducts = products
    ?.filter((item) => item.category === product.category)
    .filter((item) => item._id !== product._id);

  const allImages = product.thumbnail
    ?.map((picture) => picture)
    .concat(product.images?.map((images) => images));

  const handleQuantityChange = (e) => {
    setSelectedQuantity(e.target.value);
  };

  const handleAddItemToTheCart = (itemQuantity, product) => {
    console.log(product);
    const cartItemObj = {
      productId: product._id,
      name: product.name,
      quantity: itemQuantity,
      sku: product.sku,
      price: product.price,
      thumbnail: product.thumbnail,
      availableQuantity: product.quantity,
    };
    if (!user._id) {
      return toast.error("Please login to continue");
    }

    dispatch(addItemsToCartActions(cartItemObj, user._id, cartItems));
  };

  useEffect(() => {
    dispatch(getAProductAction(id));
  }, [id]);
  useEffect(() => {
    if (product?.thumbnail) {
      setProductPicDisplay(product.thumbnail?.map((picture) => picture));
      setProductDescription(product.description?.slice(0, 400));
    }
  }, [product]);
  return (
    <>
      <Header />
      <Container className="pt-5">
        <Row className="productPageRow1">
          <Col className=" productPageCol1" xs={12} md={1}>
            <Col xs={12} className="sidePicturesDiv">
              {allImages?.map((image, index) => (
                <Col key={index} className="mb-1">
                  <img
                    src={image}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                    onClick={() => {
                      setProductPicDisplay(image);
                    }}
                  />
                </Col>
              ))}
            </Col>
          </Col>

          <Col className="mainProductImageCol " xs={12} md={6}>
            <Image
              src={productPicDisplay}
              style={{ height: "100%", width: "100%" }}
            />
          </Col>

          <Col className="productDescriptionCol " xs={12} md={5}>
            <Row className="gap-4 p-2">
              <Row className="productName-row">
                <h3 className="p-0">{product.name}</h3>
              </Row>
              <Row className="fw-bold fs-4 " style={{ color: "#696969" }}>
                {" "}
                $ {product.price}
              </Row>

              <Row>Reviews:</Row>

              <Row className="mt-2">
                <Row className="mb-2">
                  <Col xs={3} className="d-flex  align-items-center p-0">
                    Quantity:
                  </Col>
                  <Col>
                    {/* ------================================================================ */}
                    <Form.Select
                      className="w-50"
                      value={selectedQuantity}
                      onChange={handleQuantityChange}
                    >
                      {selectQuantity.map((quantity, i) => (
                        <option key={i}>{quantity}</option>
                      ))}
                    </Form.Select>
                  </Col>
                </Row>
                <Col className="p-0 ">
                  <Button
                    className="w-100 "
                    style={{ background: "#444444", borderColor: "#444444" }}
                    onClick={() =>
                      handleAddItemToTheCart(selectedQuantity, product)
                    }
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <Spinner animation="border" size="sm" />
                    ) : (
                      "Add to Cart"
                    )}
                  </Button>
                </Col>
                <Col className="p-0 ps-1">
                  {" "}
                  <Button variant="outline-danger" size="md">
                    <FaHeart />
                  </Button>
                </Col>
              </Row>
            </Row>
          </Col>
        </Row>

        <Row className=" productDescriptionRow">
          <span className="">Description:</span>
          <span>
            {productDescription}
            {productDescription?.length > 400 ? (
              <button
                className="product-readmore-button"
                onClick={() =>
                  setProductDescription(product?.description.slice(0, 400))
                }
              >
                Read Less..
              </button>
            ) : (
              <button
                className="product-readmore-button"
                onClick={() => setProductDescription(product.description)}
              >
                Read More..
              </button>
            )}
          </span>
        </Row>
        <Row className="mt-4">
          <ScrollTable similarCategoryProducts={similarCategoryProducts} />
        </Row>
      </Container>
    </>
  );
};

export default ProductPage;
