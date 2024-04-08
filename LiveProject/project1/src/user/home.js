import { useState, useEffect } from "react";
import swal from "sweetalert";
import ReactPaginate from "react-paginate";

const MyHome = () =>{
    let[allproduct, updateProduct] = useState([]);

    const getProduct = () =>{
        let url = "http://localhost:1234/product";
        fetch(url)
        .then(response=>response.json())
        .then(productArray=>{
            updateProduct(productArray.reverse());
        })
    }

    useEffect(()=>{
        getProduct();
    }, []);

    let[keyword, updateKeyword] = useState("");

    const PER_PAGE = 12;
    const [currentPage, setCurrentPage] = useState(0);
    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage)
    }
    const offset = currentPage * PER_PAGE;
    const pageCount = Math.ceil(allproduct.length / PER_PAGE);

    const AddtoCart = (product) =>{
        product["qty"] = 1;
        let url = "http://localhost:1234/cart";
        let postdata = {
            headers:{'content-type':'application/json'},
            method:"post",
            body:JSON.stringify(product)
        }
        fetch(url, postdata)
        .then(response=>response.json())
        .then(pinfo=>{
            swal(product.pname, "Added in Your Cart!", "success");
        })
    }

    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6 mb-4">
                    <div className="input-group">
                        <label className="input-group-text"> <i className="fa fa-search"></i> </label>
                        <input type="text" className="form-control"
                        onChange={obj=>updateKeyword(obj.target.value)}
                        placeholder="Search..."/>
                    </div>
                </div>
                <div className="col-lg-3 mb-4"></div>

                {
                    allproduct.slice(offset, offset + PER_PAGE).map((product, index)=>{
                        if( product.pname.toLowerCase().match(keyword.toLowerCase()) || product.price.toString().match(keyword) )
                        return(
                            <div className="col-lg-2 mb-4 p-2" key={index}>
                                <h5 className="text-info text-center mb-3"> {product.pname} </h5>
                                <img src={product.photo} height="130" width="100%"/>
                                <p className="mt-3 text-danger"> Rs.{product.price} </p>
                                <p> {product.details} </p>
                                <p className="text-center">
                                    <button onClick={AddtoCart.bind(this, product)}
                                        className="btn btn-danger btn-sm">
                                        <i className="fa fa-plus"></i> Add To Cart
                                    </button>
                                </p>
                            </div>
                        )
                    })
                }
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
    )

}

export default MyHome;