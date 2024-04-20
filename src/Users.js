import React from 'react'
import Navigation from './mod-ui-components/Navigation';
import PatientCollection from "./ui-components/PatientCollection";

function Userpage(){
    return(
        <div className="App" >
                <Navigation overrides={{"Navigation": { className: "customNavigation" } }} />
                <h1 className='header'>Patients</h1>
                    <div className='patientsTableDiv'>
                        <PatientCollection overrides={{"PatientCollection": {className: "customPatientCollection", style:{marginLeft: "75px"}} }}/>
                    </div>
                <br></br>
        </div>
    )
}

export default Userpage;