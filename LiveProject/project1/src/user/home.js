import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import swal from "sweetalert";

const MyHome = () => {
  let [allproduct, updateProduct] = useState([]);

  //Get Product in Table Function
  const getProduct = () => {
    fetch("http://localhost:1234/product")
      .then((response) => response.json())
      .then((pArray) => {
        updateProduct(pArray.reverse());
      });
  };

  // Get data while loaded
  useEffect(() => {
    getProduct();
  }, []);
  
  // Variable to work searcch property
  let [keyword, updateKeyword] = useState("");

  // pagination code
  const PER_PAGE = 3;
  const [currentPage, setCurrentPage] = useState(0);
  function handlePageClick({ selected: selectPage }) {
    setCurrentPage(selectPage);
  }
  const offset = currentPage * PER_PAGE;
  const pageCount = Math.ceil(allproduct.length / PER_PAGE);

  //Add to Cart Function
  const AddtoCart = (product) => {
    product["qty"] = 1;
    let url = "http://localhost:1234/cart";
    let postdata = {
      headers: { "content-type": "application/json" },
      method: "post",
      body: JSON.stringify(product),
    };
    fetch(url, postdata)
      .then((response) => response.json())
      .then((pinfo) => {
        swal(product.pname + " - Added to Your Cart !", "Success");
      });
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-3 mb-4"></div>
        <div className="col-lg-6 mb-4">
          <div className="input-group">
            <label className="input-group-text">
              <i className="fa fa-search"></i>
            </label>
            <input
              type="text"
              className="form-control"
              onChange={(obj) => updateKeyword(obj.target.value)}
              placeholder="Search..."
            />
          </div>
        </div>
        <div className="col-lg-3 mb-4"></div>
        {allproduct.slice(offset, offset + PER_PAGE).map((product, index) => {
          if (
            product.pname.toLowerCase().match(keyword.toLowerCase()) ||
            product.price.toString().match(keyword)
          )
            return (
              <div className="col-lg-4 mb-4 p-2 text-center" key={index}>
                <h4 className="text-info mb-4">{product.pname}</h4>
                <img src={product.photo} height={150} width={220} />
                <p className="mt-3 text-danger">Rs. {product.price}</p>
                <p>{product.details}</p>
                <p>
                    <button className="btn btn-secondary btn-sm" onClick={AddtoCart.bind(this, product)}>
                        <i className="fa fa-plus"></i>  Add to Cart
                    </button>
                </p>
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

export default MyHome;
