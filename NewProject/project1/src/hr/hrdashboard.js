import { useState, useEffect } from "react";

const HrDashboard = () => {

    let [alljob, setJob] = useState([]);
    let [errormsg, updateErrorMsg] = useState("");

    const getJob = async() => {

        let input = {
            "companyid": localStorage.getItem("companyid"),
            "token": localStorage.getItem("easytohire-token")
        }

        let postData = {
            headers: { 'Content-Type': 'application/json' },
            method: "POST",
            body: JSON.stringify(input)
        }

        try{
        await fetch("https://easytohire.in/webapi/job/alljob", postData)
            .then(response => response.json())
            .then(jobArray => {
                setJob(jobArray.reverse());
            })
        }catch(error){
            updateErrorMsg("Network error...Please try later...");
        }

    }

    useEffect(() => {
        getJob();
    }, []);

    return (

        <div className="container pt-5">

            <div className="row mb-4">

                <div className="col-lg-12 text-center">
                    <h3 className="text-primary mb-2"> <i className="fa fa-home"></i> {localStorage.getItem("fullname")}'s HR Dashboard </h3>
                    <i className="text-danger"> {errormsg} </i>
                </div>

            </div>

            <div className="row text-center">

                <div className="col-lg-4 mb-5">

                    <div className="rounded shadow p-3">

                        <i className="fa fa-suitcase text-primary fa-3x mb-3"></i>
                        <h5> {alljob.length} Jobs </h5>

                    </div>

                </div>

                <div className="col-lg-4 mb-5">

                    <div className="rounded shadow p-3">

                        <i className="fa-solid fa-circle-check text-success fa-3x mb-3"></i>
                        <h5> 23 Selected Profiles </h5>

                    </div>

                </div>

                <div className="col-lg-4 mb-5">

                    <div className="rounded shadow p-3">

                        <i className="fa-solid fa-circle-xmark text-danger fa-3x mb-3"></i>
                        <h5> 1200 Rejected Profiles </h5>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default HrDashboard;