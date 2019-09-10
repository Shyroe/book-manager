import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

//Redux
import { useDispatch } from "react-redux";
import { deleteProductAction } from "../actions/productsActions";

const Product = ({ product }) => {
  //Dispatch to execute the actions
  const dispatch = useDispatch();

  const confirmDeleteProduct = id => {
    //Sweet alert confimation
    Swal.fire({
      title: "Are you sure?",
      text: "You really want to delete this product?",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, I want to delete it."
    }).then(result => {
      if (result.value) {
        Swal.fire("Deleted!", "The product has been deleted.", "success");

        //Function that allow us to delete the product
        dispatch(deleteProductAction(id));
      }
    });
  };

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

        <button
          className="btn btn-danger"
          onClick={() => confirmDeleteProduct(product.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Product;
