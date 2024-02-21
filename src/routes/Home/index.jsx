import { useEffect } from "react";
import { getProducts } from "../../store/ApiSlice/productSlice";
import { useDispatch } from "react-redux";
import "./home.scss";
import { useNavigate } from "react-router";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <div className="view_products_section">
      <div
        className="view_box"
        onClick={() => {
          navigate("/products");
        }}
      >
        View Products
      </div>
    </div>
  );
};

export default Home;
