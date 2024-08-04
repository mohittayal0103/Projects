
const ManagerDashboard = () => {

    return (

        <div className="container p-5">

            <div className="row mb-4">

                <div className="col-lg-12 text-center">

                    <h3 className="text-primary"> <i class="fa-solid fa-house"></i> {localStorage.getItem("fullname")}'s Dashboard  </h3>

                </div>

            </div>

            <div className="row text-center">

                <div className="col-lg-4 mb-4">

                    <div className="border-1 rounded shadow p-3">

                        <i className="fa-solid fa-circle-user text-primary fa-3x mb-3"></i>
                        <h5> 11 New Profiles </h5>

                    </div>

                </div>

                <div className="col-lg-4 mb-4">

                    <div className="border-1 rounded shadow p-3">

                        <i className="fa-solid fa-circle-check text-success fa-3x mb-3"></i>
                        <h5> 23 Selected Profiles </h5>

                    </div>

                </div>

                <div className="col-lg-4 mb-4">

                    <div className="border-1 rounded shadow p-3">

                        <i className="fa-solid fa-circle-xmark text-danger fa-3x mb-3"></i>

                        <h5> 1200 Rejected Profiles </h5>
                    </div>

                </div>

            </div>

        </div>

    )
}
export default ManagerDashboard;