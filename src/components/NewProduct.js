import React from "react";

// Redux
import { createNewProductAction } from "../actions/productsActions";
import { useDispatch } from "react-redux";

const NewProduct = () => {
  //State
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");

  //Create new product with Redux
  const dispatch = useDispatch();
  const addProduct = product => dispatch(createNewProductAction(product));

  const handleSubmit = e => {
    e.preventDefault();
    addProduct({ name, price });
    // validate from
    if (name.trim() === "" || price.trim() === "") {
      console.log("ERROR YOU MUST TYPE SOMETHING");
      return;
    }
    // create new product
    // redirect
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
