import { useState, useEffect } from "react";
import swal from "sweetalert";
import ReactPaginate from "react-paginate";

const ProductList = () =>{
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

    const PER_PAGE = 6;
    const [currentPage, setCurrentPage] = useState(0);
    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage)
    }
    const offset = currentPage * PER_PAGE;
    const pageCount = Math.ceil(allproduct.length / PER_PAGE);

    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-8 mb-4">
                    <h2 className="mb-4 text-center text-primary">
                        Available Product in Stock : {allproduct.length} 
                    </h2>
                </div>
                <div className="col-lg-4">
                    <i> Search... </i>
                    <input type="text" className="form-control"
                    onChange={obj=>updateKeyword(obj.target.value)}/>
                </div>
                {
                    allproduct.slice(offset, offset + PER_PAGE).map((product, index)=>{
                        if( product.pname.toLowerCase().match(keyword.toLowerCase()) || product.price.toString().match(keyword) )
                        return(
                            <div className="col-lg-2 mb-4 p-2" key={index}>
                                <h5 className="text-info text-center mb-3"> {product.pname} </h5>
                                <img src={product.photo} height="130" width="100%"/>
                                <p className="mt-3 text-danger"> Rs.{product.price} </p>
                                <p> {product.details} </p>
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

export default ProductList;