
const SelectedProfile = () =>{
    return(
        <div className="container pt-5">
            <div className="row mb-4">
                <div className="col-lg-12">
                    <h3 className="text-center text-success"> 
                        <i class="fa-solid fa-circle-check"></i> Selected Profiles - 12 
                    </h3>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12">
                    <table className="table">
                       <thead>
                            <tr className="table-info">
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

export default SelectedProfile;