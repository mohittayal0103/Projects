import { useState, useEffect } from "react";

const NewProfile = () => {
  let [allprofile, setProfile] = useState([]);
  let [errormsg, updateErrorMsg] = useState("");
  let [jobid, updateJobid] = useState("");
  let [round, updateRound] = useState("");

  // Candidates Data
  const getProfile = async (mydata) => {
    let info = mydata.split("#");
    updateJobid(info[0]);
    updateRound(info[1]);

    // alert(info[0] + "##" + info[1]);

    let input = {
      companyid: localStorage.getItem("companyid"),
      token: localStorage.getItem("easytohire-token"),
      jobid: info[0],
      round: info[1],
    };

    let postData = {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(input),
    };

    try {
      await fetch(
        "https://easytohire.in/webapi/job/profileforinterview",
        postData
      )
        .then((response) => response.json())
        .then((profileArray) => {
          setProfile(profileArray);
          if (profileArray.length > 0) {
            showMe(profileArray[0]);
          }
        });
    } catch (error) {
      updateErrorMsg("Network error...Please Try Later...");
    }
  };

  // Rounda Names
  let [allround, setRound] = useState([]);

  const getRound = () => {
    let input = {
      companyid: localStorage.getItem("companyid"),
      token: localStorage.getItem("easytohire-token"),
    };

    let postData = {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(input),
    };

    fetch("https://easytohire.in/webapi/job/interviewround", postData)
      .then((response) => response.json())
      .then((interviewerArray) => {
        setRound(interviewerArray);
      });
  };

  useEffect(() => {
    // getProfile();
    getRound();
  }, []);

  let [aboutme, showMe] = useState({});
  let [remark, setRemark] = useState("");
  let [feedback, setFeedback] = useState("");

  const save = (obj) => {
    obj.preventDefault();
    aboutme["jobid"] = jobid;
    aboutme["round"] = round;
    aboutme["remark"] = remark;
    aboutme["feedback"] = feedback;
    aboutme["companyid"] = localStorage.getItem("companyid");
    aboutme["interviewerid"] = localStorage.getItem("easytohire-token");

    let postData = {
      headers: { 'Content-Type': 'application/json' },
      method: "POST",
      body: JSON.stringify(aboutme)
  }
  fetch("https://easytohire.in/webapi/job/changeinterviewstatus", postData)
      .then(response => response.text())
      .then(msg => {
          alert(msg);
  })
  };

  return (
    <div className="container pt-5">
      <div className="row mb-4"></div>

      <div className="row">
        <div className="col-lg-7">
          <div className="col-xl-12 mb-3">
            <select
              className="form-select"
              onChange={(obj) => getProfile(obj.target.value)}
            >
              <option value="">Choose Requirement</option>
              {allround.map((round, index) => {
                return (
                  <option key={index} value={round.jobid + "#" + round.round}>
                    {round.jobtitle} - Round {round.round}
                  </option>
                );
              })}
            </select>
          </div>
          <h3 className="text-primary text-center">
            <i class="fa-solid fa-circle-user"></i> Profiles -{" "}
            {allprofile.length}
          </h3>
          <p className="text-danger text-center"> {errormsg} </p>

          <table className="table rounded shadow-lg">
            <tbody>
              <tr className="table-info fw-medium">
                <td> Full Name </td>
                <td> Mobile No </td>
                <td> Email Id </td>
                <td> Action </td>
              </tr>
              {allprofile.map((profile, index) => {
                return (
                  <tr key={index} onClick={showMe.bind(this, profile)}>
                    <td> {profile.fullname} </td>
                    <td> {profile.mobile} </td>
                    <td> {profile.email} </td>
                    <td>
                      <button className="btn btn-info text-white btn-sm">
                        <i className="fa fa-eye"></i> More...
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="col-xl-5">
          <div className="card border-none shadow-lg mb-3">
            <div className="card-header bg-primary text-white blockquote fw-medium">
              About : {aboutme.fullname}
            </div>
            <div className="card-body">
              <table className="table">
                <tbody>
                  <tr>
                    <td className="fw-medium"> Name: </td>{" "}
                    <td> {aboutme.fullname} </td>
                  </tr>
                  <tr>
                    <td className="fw-medium"> Mobile: </td>{" "}
                    <td> {aboutme.mobile} </td>
                  </tr>
                  <tr>
                    <td className="fw-medium"> E-mail: </td>{" "}
                    <td> {aboutme.email} </td>
                  </tr>
                  <tr>
                    <td className="fw-medium"> Exp: </td>{" "}
                    <td> {aboutme.totalexp} </td>
                  </tr>
                  <tr>
                    <td className="fw-medium"> About: </td>{" "}
                    <td> {aboutme.aboutexp} </td>
                  </tr>
                  <tr>
                    <td className="fw-medium"> Skills: </td>{" "}
                    <td> {aboutme.skill} </td>
                  </tr>
                </tbody>
              </table>
              <h5 className="text-center text-warning fs-4">
                Interview Feedback
              </h5>
              <form onSubmit={save}>
                <div className="mt-3 mb-3">
                  <select
                    className="form-select"
                    onChange={(obj) => setRemark(obj.target.value)} 
                    required
                  >
                    <option value="">Interview Status</option>
                    <option value="YES">Select</option>
                    <option value="NO">Reject</option>
                  </select>
                </div>
                <div className="mt-3 mb-3">
                  {/* <p className="fw-medium"> Interview Feedback: </p> */}
                  <textarea
                    className="form-control"
                    placeholder="Enter Your Feedback"
                    onChange={(obj) => setFeedback(obj.target.value)} 
                    required
                  ></textarea>
                </div>
                <div className="text-center">
                  <button className="btn btn-danger">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProfile;
