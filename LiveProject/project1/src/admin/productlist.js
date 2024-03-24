import { useState, useEffect } from "react";

const ProductList = () => {
  let [allproduct, updateProduct] = useState([]);

  //Get Product in Table Function

  const getProduct = () => {
    fetch("http://localhost:1234/product")
      .then((response) => response.json())
      .then((pArray) => {
        updateProduct(pArray);
      });
  };

  useEffect(() => {
    getProduct();
  }, []);

  let [keyword, updateKeyword] = useState("");

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-8 mb-4">
          <h2 className="mb4 text-center">
            Available Product in Stock : {allproduct.length}
          </h2>
        </div>
        <div className="col-lg-4 mb-4">
            <i>Search...</i>
            <input type="text" className="form-control" onChange={obj=>updateKeyword(obj.target.value)} />
        </div>
        {allproduct.map((product, index) => {
            if(product.pname.toLowerCase().match(keyword.toLowerCase()) || product.price.toString().match(keyword))
          return (
            <div className="col-lg-2 mb-4 p-2" key={index}>
              <h5 className="text-info">{product.pname}</h5>
              <img src={product.photo} height={130} width={170} />
              <p className="mt-3 text-danger">Rs. {product.price}</p>
              <p>{product.details}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
