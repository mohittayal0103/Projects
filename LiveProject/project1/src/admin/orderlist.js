import { useState, useEffect } from "react";

const Myorder = () =>{
    let[allorder, updateOrder] = useState([]);

    const getOrder = () =>{
        let url = "http://localhost:1234/order";
        fetch(url)
        .then(response=>response.json())
        .then(productArray=>{
            updateOrder(productArray.reverse());
        })
    }

    useEffect(()=>{
        getOrder();
    }, []);

   // setInterval(getOrder, 60000);

    return(
        <div className="container mt-4">
            <div className="row mb-4">
                <div className="col-lg-12">
                <h3 className="text-primary mb-5  text-center"> Recent Order : {allorder.length} </h3>
                {
                allorder.map((order, index)=>{
                    return(
                        <div className="mb-5 border p-4 rounded" key={index}>
                        <div className="row">
                            <div className="col-lg-3">
                                <h6> Customer Details </h6>
                                <p> Full Name : {order.fullname} </p>
                                <p> e-Mail : {order.email} </p>
                                <p> Mobile : {order.mobile} </p>
                                <p> Address : {order.address} </p>
                            </div>
                            <div className="col-lg-9">
                                <p className="text-center text-danger mb-3"> Order Id : {order.id} </p>
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Product Name</th>
                                            <th>Photo</th>
                                            <th>Quantity</th>
                                            <th>Price</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            order.itemlist.map((product, index2)=>{
                                                return(
                                                    <tr key={index2}>
                                                        <td> {product.pname} </td>
                                                        <td> <img src={product.photo} height="30"/> </td>
                                                        <td> {product.qty} </td>
                                                        <td> {product.price} </td>
                                                        <td> {product.qty * product.price} </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    )
               }) 
            }
             </div>
            </div>
        </div>
    )
}

export default Myorder;