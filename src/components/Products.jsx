import React, { useEffect } from "react";
import Product from "./Product";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { getProductsAction } from "../actions/productsActions";

const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    //Call the function to start downloading the products
    const downloadProducts = () => dispatch(getProductsAction());
    downloadProducts();
  }, []);

  //Access to the state
  const loading = useSelector(state => state.products.loading);
  const error = useSelector(state => state.products.error);
  const books = useSelector(state => state.products.products);

  return (
    <React.Fragment>
      {error ? (
        <div className="font-weight-bold alert alert-danger text-center mt-4">
          There is an error ...
        </div>
      ) : null}
      <>
        <h2 className="text-center my-5">Product List</h2>

        <table className="table table-striped">
          <thead className="bg-primary table-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map(product => (
              <Product key={product.id} product={product} />
            ))}
          </tbody>
        </table>
        {loading ? <h1>Cargando .....</h1> : null}
      </>
    </React.Fragment>
  );
};

export default Products;
