import React from "react";
import "./ProductDetailsModal.scss";
import ProductDetails from "../ProductDetails";
import { X } from "react-feather";
export default function ProductDetailsModal({ product, setProduct }) {
  return (
    <div
      className={
        product?.modal
          ? "product-details-modal-wrapper open-modal-alignment"
          : "product-details-modal-wrapper close-modal-alignment"
      }
    >
      <div className="product-details-boxs ">
        <ProductDetails product={product} />

        <div
          className="modal-close-alignment"
          onClick={() => setProduct({ ...product, modal: false })}
        >
          <X size={24} />
        </div>
      </div>
    </div>
  );
}
