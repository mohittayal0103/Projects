import { useState } from "react";

const SelectedProfile = () => {

    return(

        <div className="container pt-5">

            <div className="row">
                <h3 className="text-center text-success mb-4 col-xl-12"> <i class="fa-solid fa-circle-check"></i> Manage Selected Profiles </h3>
            </div>

            <div className="row mb-4">

                <div className="col-lg-3"></div>

                <div className="col-lg-6">

                    <label className="mb-1"> Filter By Job Requirement </label>
                    <select className="form-select">
                        <option>Choose</option>
                        <option> Java Developer For Bangalore </option>
                        <option> PHP Developer For Mumbai </option>
                    </select>

                </div>

                <div className="col-lg-3"></div>

            </div>
            
        </div>
        
    )
}

export default SelectedProfile;