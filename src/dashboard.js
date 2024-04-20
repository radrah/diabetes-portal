import React, { useEffect, useState } from 'react'
import Navigation from './mod-ui-components/Navigation';
import DashboardTop from "./ui-components/DashboardTop";
import WorkoutsCompletedGraph from "./ui-components/WorkoutsCompletedGraph";
import RecentMessages from "./ui-components/RecentMessages";
import WorkoutResponses from './ui-components/WorkoutResponses';
import { DashboardData } from './models';
import { DataStore } from 'aws-amplify';
import {
    Grid,
    Typography
  } from "@material-ui/core";

function DashboardPage() {

    const [dashboardData, setDashboardData] = useState([]);

    useEffect(() => {
        async function getDashboardData() {
            let data = await DataStore.query(DashboardData);
            setDashboardData(data[0]);
        }
        getDashboardData();
    })  

    return(
        <div className="App" style={{display: "flex"}}>
            <div style={{width: "25%"}}>
                <Navigation overrides={{"Navigation": { className: "customNavigation" } }} />
            </div>
            <Grid container>
            <Grid container xs={12} md={12} lg={12} >
                <Grid item style={{height: "15%"}}>
                    <Typography class={"header"} variant="h1">Dashboard</Typography>
                </Grid>
            </Grid>

            <Grid item xs={10} md={10} lg={12} style={{marginRight: "150px"}}>
                <DashboardTop overrides={{"DashboardTop": {className: "customDashboardTop"}}} dashboardData={dashboardData}/>
            </Grid>
            <Grid item>
                <WorkoutsCompletedGraph overrides={{"WorkoutsCompletedGraph": { className: "customWorkoutsCompletedGraph" } }}/>
            </Grid>
            <Grid item>
            <div className='dashboardBottom'>
                <WorkoutResponses overrides={{"WorkoutResponses": {className: "customWorkoutResponses" } }}/>
                <RecentMessages overrides={{"RecentMessages": {className: "customRecentMessages" }}} />
            </div>
            </Grid>
            </Grid>
        </div>
    )
}

export default DashboardPage;