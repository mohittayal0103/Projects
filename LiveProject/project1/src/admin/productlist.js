import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const ProductList = () => {
  let [allproduct, updateProduct] = useState([]);

  //Get Product in Table Function

  const getProduct = () => {
    fetch("http://localhost:1234/product")
      .then((response) => response.json())
      .then((pArray) => {
        updateProduct(pArray.reverse());
      });
  };

  useEffect(() => {
    getProduct();
  }, []);

  let [keyword, updateKeyword] = useState("");

  const PER_PAGE = 5;
  const [currentPage, setCurrentPage] = useState(0);
  function handlePageClick({ selected: selectPage }) {
    setCurrentPage(selectPage);
  }
  const offset = currentPage * PER_PAGE;
  const pageCount = Math.ceil(allproduct.length / PER_PAGE);

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
          <input
            type="text"
            className="form-control"
            onChange={(obj) => updateKeyword(obj.target.value)}
          />
        </div>
        {allproduct.slice(offset, offset + PER_PAGE).map((product, index) => {
          if (
            product.pname.toLowerCase().match(keyword.toLowerCase()) ||
            product.price.toString().match(keyword)
          )
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
      <div className="mb-4 mt-4">
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"pagination  justify-content-center"}
          pageClassName={"page-item "}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active primary"}
        />       
      </div>
    </div>
  );
};

export default ProductList;
