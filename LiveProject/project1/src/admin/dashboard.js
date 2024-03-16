import { useState, useEffect } from "react";

const MyDashboard = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-12 text-center mb-4">
          <h1 className="text-primary"> Seller Dashboard </h1>
        </div>
        <div className="col-lg-2"></div>
        <div className="col-lg-4 text-center">
          <i className="fa fa-database fa-4x text-info"></i>
          <h3> Item in Stock : 100 </h3>
        </div>
        <div className="col-lg-4 text-center">
          <i className="fa fa-headset fa-4x text-info"></i>
          <h3> Order Received : 100 </h3>
        </div>
        <div className="col-lg-2"></div>
      </div>
    </div>
  );
};

export default MyDashboard;
