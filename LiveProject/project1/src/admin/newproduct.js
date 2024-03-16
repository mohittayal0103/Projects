import { useState, useEffect } from "react";

const NewProduct = () => {
    return(
        <div className="container mt-4">
            <div className="row">
            <div className="col-lg-12 text-center">
                <h3 className="text-primary">Enter Product Details</h3>
            </div>
            <div className="col-lg-4">
                <p>Enter Product Name</p>
                <input type="text" className="form-control" />
            </div>
            <div className="col-lg-4">
                <p>Enter Product Price</p>
                <input type="text" className="form-control" />
            </div>
            <div className="col-lg-4">
                <p>Enter Product Photo URL</p>
                <input type="text" className="form-control" />
            </div>
            <div className="col-lg-8">
                <p>Enter Product Description</p>
                <textarea className="form-control"></textarea>
            </div>
            <div className="col-lg-4 pt-5 text-center">
                <button className="btn btn-primary"> Save Product </button>
            </div>
            </div>
        </div>
    );
}

export default NewProduct;