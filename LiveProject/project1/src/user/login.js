import { useState } from "react";
import swal from "sweetalert";

const Mylogin = () => {
  let [email, pickEmail] = useState("");
  let [pass, pickPass] = useState("");

  const goLogin = () => {
    if (email == "" || pass == "") {
      swal("Invalid Input", "Empty Email or Password", "warning");
    } else {
      let url =
        "http://localhost:1234/account?email=" + email + "&password=" + pass;
      fetch(url)
        .then((response) => response.json())
        .then((userinfo) => {
          if (userinfo.length > 0) {
            localStorage.setitem("sellerid", userinfo[0].id);
            localStorage.setitem("sellername", userinfo[0].fullname);
            window.location.reload();
          } else {
            swal("Invalid Input", "Invalid or Not Exists", "warning");
          }
        });
    }
  };

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
                <input
                  type="email"
                  className="form-control"
                  onChange={(obj) => pickEmail(obj.target.value)}
                />
              </div>
              <div className="mb-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  onChange={(obj) => pickPass(obj.target.value)}
                />
              </div>
            </div>
            <div className="card-footer text-center">
              <button className="btn btn-danger" onClick={goLogin}>
                Login <i className="fa fa-arrow-right"></i>
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
