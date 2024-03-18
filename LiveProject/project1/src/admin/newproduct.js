import { useState, useEffect } from "react";

const NewProduct = () => {
  let [allproduct, updateProduct] = useState("");
  let [productname, pickName] = useState("");
  let [productprice, pickPrice] = useState("");
  let [productphoto, pickPhoto] = useState("");
  let [productdetails, pickDetails] = useState("");


  //Get Product in Table Function
  const getProduct = () => {
    fetch("http://localhost:1234/product")
    .then(response=>response.json())
    .then(pArray=>{
        updateProduct(pArray);
    });
  };

  //Save Function

  const save = () => {
    let url = "http://localhost:1234/product";
    let newproduct = {
      pname: productname,
      price: productprice,
      photo: productphoto,
      details: productdetails,
    };
    let postdata = {
      headers: { "content-type": "application/json" },
      method: "post",
      body: JSON.stringify(newproduct),
    };
    fetch(url, postdata)
      .then((response) => response.json())
      .then((pinfo) => {
        alert(newproduct.pname + " - Uploaded Successfully !");
        pickName("");
      });
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h3 className="text-primary">Enter Product Details</h3>
        </div>
        <div className="col-lg-4">
          <p>Enter Product Name</p>
          <input
            type="text"
            className="form-control"
            onChange={(obj) => pickName(obj.target.value)}
          />
        </div>
        <div className="col-lg-4">
          <p>Enter Product Price</p>
          <input
            type="text"
            className="form-control"
            onChange={(obj) => pickPrice(obj.target.value)}
          />
        </div>
        <div className="col-lg-4">
          <p>Enter Product Photo URL</p>
          <input
            type="text"
            className="form-control"
            onChange={(obj) => pickPhoto(obj.target.value)}
          />
        </div>
        <div className="col-lg-8">
          <p>Enter Product Description</p>
          <textarea
            className="form-control"
            onChange={(obj) => pickDetails(obj.target.value)}
          ></textarea>
        </div>
        <div className="col-lg-4 pt-5 text-center">
          <button className="btn btn-primary" onClick={save}>
            {" "}
            Save Product{" "}
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8"></div>
        <div className="col-lg-2"></div>
      </div>
    </div>
  );
};

export default NewProduct;
