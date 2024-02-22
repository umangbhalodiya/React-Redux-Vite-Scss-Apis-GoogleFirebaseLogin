import { useSelector } from "react-redux";
import "./productDetails.scss";
import Header from "../../Components/Header";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { singleProduct } = useSelector((state) => state.products);

  useEffect(() => {
    if (!singleProduct.id) {
      navigate("/products");
    }
  }, [singleProduct]);

  return (
    <div className="productpage_section">
      <Header />
      <Toaster />
      <div className="productItem">
        <img src={singleProduct?.image} />

        <div>
          <div>{singleProduct?.title}</div>
          <div>{singleProduct?.price}</div>
          <div>{singleProduct?.description}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
