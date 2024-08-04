import { useState } from "react";

const Mylogin = () =>{
    let[loginData, setLoginData] = useState( {} );
    let[msg, setMsg] = useState("");

    const pickValue = (obj) =>{
        loginData[obj.target.name] = obj.target.value;
        setLoginData(loginData);
    }

    const login = (obj) =>{
        obj.preventDefault();
        let url = "https://easytohire.in/webapi/login/validateme";
        let postData = {
            headers: { 'Content-Type': 'application/json' },
            method: "POST",
            body: JSON.stringify(loginData)
        };
        fetch(url, postData)
        .then(respoonse=>respoonse.json())
        .then(info=>{
            setMsg( info.message );
            if(info.status=="SUCCESS"){
                localStorage.setItem("easytohire-token", info.tokenno);
                localStorage.setItem("companyid", info.companyid);
                localStorage.setItem("fullname", info.name);
                localStorage.setItem("roletype", info.type);
                window.location.reload();
            }
        })
    }


    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-xl-4"></div>

                <div className="col-xl-4">

                    <h2 className="text-primary text-center mb-4 sitename"> 
                        <i class="fa-solid fa-handshake"></i> EasyToHire 
                    </h2>

                    <p className="mb-2 text-center text-danger"> {msg} </p>

                    <form onSubmit={login}>
                        <div className="card border-0 shadow-lg">
                            <div className="card-header bg-primary text-center text-white"> Employee Login </div>
                            <div className="card-body">
                                <div className="mb-3">
                                    <p> Your Email Id </p>
                                    <input type="email" className="form-control" name="email"
                                    onChange={pickValue}/>
                                </div>
                                <div className="mb-3">
                                    <p> Your Password </p>
                                    <input type="password" className="form-control" name="password"
                                    onChange={pickValue}/>
                                </div>
                            </div>
                            <div className="card-footer text-center">
                                <button className="btn btn-success"> <i class="fa-solid fa-right-to-bracket"></i> Login </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-xl-4"></div>
            </div>
        </div>
    )
}

export default Mylogin;