
import { HashRouter, Routes, Route,Link } from "react-router-dom";
import Mylogin from './login';
import MyHome from "./home";
import Mycart from "./cart";

const UserApp = () =>{

    return(
        <HashRouter>
            <nav className="navbar navbar-expand-sm navbar-dark bg-mycolor p-3 sticky-top">
                <div className="container">
                    <a className="navbar-brand">
                        <i className="fa fa-shopping-bag fa-lg"></i> ShopNow
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mynavbar">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item me-4">
                            <Link className="nav-link active" to="/"> <i className="fa fa-home"></i> Home </Link>
                        </li>
                        <li className="nav-item me-4">
                            <Link className="nav-link active" to="/cart"> <i className="fa fa-shopping-cart"></i> My Cart </Link>
                        </li>
                        <li className="nav-item me-4">
                            <Link className="nav-link active" to="/login"> <i className="fa fa-user-tie"></i> Seller Login </Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav> 

            <Routes>
                <Route exact path="/" element={ <MyHome/> }/>
                <Route exact path="/login" element={ <Mylogin/> }/>
                <Route exact path="/cart" element={ <Mycart/> } />
            </Routes>

            <footer className="bg-secondary text-white p-5 mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <h4>About Us</h4>
                            <p>
                                dfdfdf dfg dfg dfg dfg dfg dfg dfg dfg dfg dfg dfg dfg dfg dfg dfg dfg
                                dfdfdf dfg dfg dfg dfg dfg dfg dfg dfg dfg dfg dfg dfg dfg dfg dfg dfg
                                dfdfdf dfg dfg dfg dfg dfg dfg dfg dfg dfg dfg dfg dfg dfg dfg dfg dfg
                                dfdfdf dfg dfg dfg dfg dfg dfg dfg dfg dfg dfg dfg dfg dfg dfg dfg dfg
                                dfdfdf dfg dfg dfg dfg dfg dfg dfg dfg dfg dfg dfg dfg dfg dfg dfg dfg
                                dfdfdf dfg dfg dfg dfg dfg dfg dfg dfg dfg dfg dfg dfg dfg dfg dfg dfg
                            </p>
                        </div>
                        <div className="col-lg-4">
                            <h4> Contact to Support </h4>
                            <p> Mobile No +91-8884166608 </p>
                            <p> e-Mail Id - contact@yourwebsite.com </p>
                            <p> e-Mail Id - support@yourwebsite.com</p>
                        </div>
                        <div className="col-lg-4">
                            <h4> Follow Us in Social Media </h4>
                            <p> <i className="fab fa-facebook fa-lg"></i> www.facebook.com </p>
                            <p> <i className="fab fa-twitter fa-lg"></i> www.twitter.com </p>
                            <p> <i className="fab fa-linkedin fa-lg"></i> www.linkedin.com </p>
                            <p> <i className="fab fa-twitter fa-lg"></i> www.twitter.com </p>
                        </div>
                    </div>
                </div>
            </footer>
        </HashRouter>
    )
}

export default UserApp;