import React, { useEffect, useRef } from "react";
import Swal from "sweetalert2";

// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  editProductAction,
  updateProductAction
} from "../actions/productsActions";
import {
  validateFormAction,
  validationSuccess,
  validationError
} from "../actions/actionsValidation";

const EditProduct = ({ match, history }) => {
  // Create the refs is a good idea when is editing
  const nameRef = useRef("");
  const priceRef = useRef("");

  // Alias to use the function dispatch to execute the main action of edit
  const dispatch = useDispatch();
  const productUpdated = product => dispatch(updateProductAction(product));

  // Get the ID of the product that will be edited
  const { id } = match.params;

  useEffect(() => {
    dispatch(editProductAction(id));
  }, [dispatch, id]);

  // Access to our global state
  const product = useSelector(state => state.products.product);
  const error = useSelector(state => state.products.error);
  const formValidation = () => dispatch(validateFormAction());
  const successValidation = () => dispatch(validationSuccess());
  const failureValidation = () => dispatch(validationError());

  // This will be show while the API is loading
  if (!product) return "Loading ...";

  const handleUpdateProduct = e => {
    e.preventDefault();
    // Insert validation in the form
    formValidation();
    if (
      nameRef.current.value.trim() === "" ||
      priceRef.current.value.trim() === ""
    ) {
      failureValidation();
      return;
    }
    successValidation();
    productUpdated({
      id,
      name: nameRef.current.value,
      price: priceRef.current.value
    });
    Swal.fire("Saved!", "Product updated successfully", "success");
    // Redirect
    history.push(`/`);
  };

  return (
    <>
      {error ? (
        <div className="font-weight-bold alert alert-danger text-center mt-4">
          There is an error, try it again ...
        </div>
      ) : (
        <div className="row justify-content-center mt-5">
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <h2 className="text-center">Edit Product</h2>
                <form onSubmit={handleUpdateProduct}>
                  <div className="form-group">
                    <label>Enter Book Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Title: La ciudad y los perros"
                      defaultValue={product.name}
                      ref={nameRef}
                    />
                  </div>
                  <div className="form-group">
                    <label>Enter Book Price</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Price: 30$"
                      defaultValue={product.price}
                      ref={priceRef}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-dark font-weight-bold text-uppercase d-block w-100"
                  >
                    Save Changes
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditProduct;
