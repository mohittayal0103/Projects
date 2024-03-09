import { useState } from "react";
import swal from "sweetalert";

const Mylogin = () => {

    let [email, pickEmail] = useState("");
    let [pass, pickPass] = useState("");

    const goLogin = () => {
        if(email == "" || pass == ""){
            swal("Invalid Input", "Empty Email or Password", "warning")
        }
        else{

        }
    }


  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-4"></div>
        <div className="col-lg-4">
          <div className="card border-0 shadow-lg">
            <div className="card-header bg-primary text-white">
              <i className="fa fa-lock"></i> Login
            </div>
            <div className="card-body">
                <div className="mb-3">
                    <label>Email ID</label>
                    <input type="email" className="form-control" />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input type="password" className="form-control" />
                </div>
            </div>
            <div className="card-footer text-center">
              <button className="btn btn-danger" onClick={goLogin}>
                Login<i className="fa fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-4"></div>
      </div>
    </div>
  );
};

export default Mylogin;
