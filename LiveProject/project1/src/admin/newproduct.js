
import { useState } from "react";
import swal from "sweetalert";

const NewProduct = () =>{
      // create 4 state variable
      let[pname, pickName] = useState("");
      let[pprice, pickPrice] = useState("");
      let[pphoto, pickPhoto] = useState("");
      let[details, pickDetails] = useState("");

    const save = () =>{
        let url = "http://localhost:1234/product";
        let newproduct = {pname:pname, price:pprice, photo:pphoto, details:details};
        let postdata = {
            headers:{'content-type':'application/json'},
            method:"post",
            body:JSON.stringify(newproduct)
        }
        fetch(url, postdata)
        .then(response=>response.json())
        .then(pinfo=>{
            swal(newproduct.pname, "Uploaded Successfully !", "success");
            pickName("");
            pickPrice("");
            pickPhoto("");
            pickDetails("");
        })
    }

    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-12 text-center mb-4">
                    <h3 className="text-primary">Enter Product Details</h3>
                </div>

                <div className="col-lg-4">
                    <p> Enter Product Name </p>
                    <input type="text" className="form-control" value={pname}
                    onChange={obj=>pickName(obj.target.value)}/>
                </div>

                <div className="col-lg-4">
                    <p> Enter Product Price </p>
                    <input type="text" className="form-control" value={pprice}
                    onChange={obj=>pickPrice(obj.target.value)}/>
                </div>

                <div className="col-lg-4">
                    <p> Enter Product Photo URL </p>
                    <input type="text" className="form-control" value={pphoto}
                    onChange={obj=>pickPhoto(obj.target.value)}/>
                </div>

                <div className="col-lg-8">
                    <p> Enter Product Description </p>
                    <textarea className="form-control" value={details}
                    onChange={obj=>pickDetails(obj.target.value)}></textarea>
                </div>

                <div className="col-lg-4 pt-5 text-center">
                   <button className="btn btn-primary" onClick={save}> Save Product </button>
                </div>
            </div>
        </div>
    )
}

export default NewProduct;