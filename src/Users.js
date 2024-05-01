import React from 'react'
import Navigation from './mod-ui-components/Navigation';
import PatientCollection from "./ui-components/PatientCollection";
import {
    Grid,
    Typography
  } from "@material-ui/core";

function Userpage(){
    return(
        <div className="App" style={{display: "flex"}}>
            <div style={{width: "25%"}}>
             <Navigation />
             </div>
                <Grid container xs={12} md={12} lg={12} >
                    <Grid item style={{height: "15%"}}>
                        <Typography class={"header"} variant="h1">Patients</Typography>
                    </Grid>
                </Grid>
                    <div className='patientsTableDiv'>
                        <PatientCollection overrides={{"PatientCollection": {className: "customPatientCollection", style:{marginLeft: "75px"}} }}/>
                    </div>
                <br></br>
        </div>
    )
}

export default Userpage;