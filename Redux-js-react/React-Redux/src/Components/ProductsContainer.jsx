import React, { useEffect } from "react";
// import { connect } from 'react-redux';
import { fetchProducts } from "./redux";
import { useDispatch, useSelector } from "react-redux";

function ProductsContainer() {
  const productsData = useSelector((state) => state.product);
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div>
      {productsData.loading && <p>Loading....</p>}
      {productsData.error && <p>{productsData.error}</p>}
      {productsData.products && (
        <h4>
          {productsData.products.map((title) => (
            <p>{title}</p>
          ))}
        </h4>
      )}
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     productsData: state.product,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchProducts: () => dispatch(fetchProducts()),
//   };
// };
// export default connect(mapStateToProps,mapDispatchToProps)(ProductsContainer)

export default ProductsContainer;
