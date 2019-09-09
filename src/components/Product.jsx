import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <tr>
      <td>{product.name}</td>
      <td>
        <span className="font-weight-bold">{product.price}</span>
      </td>
      <td className="acciones">
        <Link
          to={`/products/edit/${product.id}`}
          className="btn btn-primary mr-2"
        >
          Edit
        </Link>

        <button className="btn btn-danger ">Delete</button>
      </td>
    </tr>
  );
};

export default Product;
