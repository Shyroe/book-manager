import React from "react";

// Redux
import { createNewProductAction } from "../actions/productsActions";
import {
  validateFormAction,
  validationError,
  validationSuccess
} from "../actions/actionsValidation";
// useSelector is the tool that allows you to have access to your state in Redux
import { useDispatch, useSelector } from "react-redux";

const NewProduct = ({ history }) => {
  //State
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");

  //Create new product with Redux
  const dispatch = useDispatch();
  const addProduct = product => dispatch(createNewProductAction(product));
  const formValidation = () => dispatch(validateFormAction());
  const successValidation = () => dispatch(validationSuccess());
  const failureValidation = () => dispatch(validationError());

  //Getting the data from our global state
  const error = useSelector(state => state.error.error);

  const handleSubmit = e => {
    e.preventDefault();
    formValidation();
    // validate form
    if (name.trim() === "" || price.trim() === "") {
      failureValidation();
      return;
    }
    //If it pass the validation
    successValidation();
    // create new product
    addProduct({ name, price });
    // redirect
    history.push("/");
  };

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold ">Add New Book</h2>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Book Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name of the book"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Book Price</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Price of the book"
                  value={price}
                  onChange={e => setPrice(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Add
              </button>
            </form>

            {error ? (
              <div className="font-weight-bold alert alert-danger text-center mt-4">
                All fields are required
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
