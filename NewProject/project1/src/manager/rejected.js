
const RejectedProfile = () =>{
    return(
        <div className="container pt-5">
            <div className="row mb-4">
                <div className="col-lg-12">
                    <h3 className="text-center text-danger"> 
                        <i class="fa-solid fa-circle-xmark"></i> Rejected Profiles - 12 
                    </h3>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <table className="table">
                       <thead>
                            <tr className="table-secondary">
                                <th> ID </th>
                                <th> Job Requirement </th>
                                <th> Full Name </th>
                                <th> Mobile No </th>
                                <th> Feedback </th>
                                <th> Action </th>
                            </tr>
                        </thead>     
                    </table>
                </div>
            </div>
        </div>
    )
}
export default RejectedProfile;