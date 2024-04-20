import React from 'react'
import Navigation from './mod-ui-components/Navigation';
import CaloriesBurned from "./ui-components/CaloriesBurned";
import MinutesActive from './ui-components/MinutesActive';
import PatientProfiles from './ui-components/PatientProfiles';
import PatientMesssageHistory from "./ui-components/PatientMesssageHistory";
import {
    Grid,
    Typography
  } from "@material-ui/core";
  import { useTheme } from "@material-ui/styles";


 function Workoutplanpage(){
     return(
         <div className="App" style={{display: "flex"}}>
             <div style={{width: "20%"}}>
             <Navigation />
             </div>
        <Grid container  xs={8} md={8} lg={8} >
        <Grid container xs={12} md={12} lg={12} >
            <Grid item style={{height: "15%"}}>
            <Typography class={"header"} variant="h1">WorkoutPlan</Typography>
            </Grid>
        </Grid>

            
        <Grid item sm={6} md={6} lg={6}>
            <div className='workoutPlan'>

                <table style={{width: "100%"}}>
                    <tr className='workoutRow'>
                        <td className='workoutColumnLeft'>
                            <label className='switch'>
                                <input type="checkbox"></input>
                                <span className='slider round'></span>
                            </label>
                        </td>
                        <td className='workoutColumn'>
                            <p> Walking</p>
                        </td>
                        <td className='workoutColumn'>
                            <select name="selectReps" id="selectReps">
                                <option value="select">Select Reps</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </td>
                        <td className='workoutColumn'>
                            <select name="repLength" id="repLength">
                                <option value="select">Rep Length</option>
                                <option value="5">5 mins</option>
                                <option value="10">10 mins</option>
                                <option value="15">15 mins</option>
                                <option value="20">20 mins</option>
                                <option value="25">25 mins</option>
                                <option value="30">30 mins</option>
                            </select>
                        </td>
                        <td className='workoutColumnRight'>
                            <form>
                                <input type="time" id='appt'    name='appt'></input>
                            </form>
                        </td>
                    </tr>
                    <br></br>

                    <tr className='workoutRow'>
                        <td className='workoutColumnLeft'>
                            <label className='switch'>
                                <input type="checkbox"></input>
                                <span className='slider round'></span>
                            </label>
                        </td>
                        <td className='workoutColumn'>
                            <p> Running</p>
                        </td>
                        <td className='workoutColumn'>
                            <select name="selectReps" id="selectReps">
                                <option value="select">Select Reps</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </td>
                        <td className='workoutColumn'>
                            <select name="repLength" id="repLength">
                                <option value="select">Rep Length</option>
                                <option value="5">5 mins</option>
                                <option value="10">10 mins</option>
                                <option value="15">15 mins</option>
                                <option value="20">20 mins</option>
                                <option value="25">25 mins</option>
                                <option value="30">30 mins</option>
                            </select>
                        </td>
                        <td className='workoutColumnRight'>
                            <form>
                                <input type="time" id='appt'    name='appt'></input>
                            </form>
                        </td>
                    </tr>

                    <br></br>

                    <tr className='workoutRow'>
                        <td className='workoutColumnLeft'>
                            <label className='switch'>
                                <input type="checkbox"></input>
                                <span className='slider round'></span>
                            </label>
                        </td>
                        <td className='workoutColumn'>
                            <p> Swimming</p>
                        </td>
                        <td className='workoutColumn'>
                            <select name="selectReps" id="selectReps">
                                <option value="select">Select Reps</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </td>
                        <td className='workoutColumn'>
                            <select name="repLength" id="repLength">
                                <option value="select">Rep Length</option>
                                <option value="5">5 mins</option>
                                <option value="10">10 mins</option>
                                <option value="15">15 mins</option>
                                <option value="20">20 mins</option>
                                <option value="25">25 mins</option>
                                <option value="30">30 mins</option>
                            </select>
                        </td>
                        <td className='workoutColumnRight'>
                            <form>
                                <input type="time" id='appt'    name='appt'></input>
                            </form>
                        </td>
                    </tr>

                    <br></br>

                    <tr className='workoutRow'>
                        <td className='workoutColumnLeft'>
                            <label className='switch'>
                                <input type="checkbox"></input>
                                <span className='slider round'></span>
                            </label>
                        </td>
                        <td className='workoutColumn'>
                            <p> Yoga</p>
                        </td>
                        <td className='workoutColumn'>
                            <select name="selectReps" id="selectReps">
                                <option value="select">Select Reps</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </td>
                        <td className='workoutColumn'>
                            <select name="repLength" id="repLength">
                                <option value="select">Rep Length</option>
                                <option value="5">5 mins</option>
                                <option value="10">10 mins</option>
                                <option value="15">15 mins</option>
                                <option value="20">20 mins</option>
                                <option value="25">25 mins</option>
                                <option value="30">30 mins</option>
                            </select>
                        </td>
                        <td className='workoutColumnRight'>
                            <form>
                                <input type="time" id='appt'    name='appt'></input>
                            </form>
                        </td>
                    </tr>

                    
                </table>  
            </div>
            </Grid>
            
            <Grid item sm={4} md={4} lg={4}>
                <PatientProfiles overrides={{"PatientProfiles": { className: "customPatientProfiles" } }}/> 
            </Grid> 

            <Grid container sm={9} md={9} lg={9}>
            <Grid item sm={4} md={4} lg={4}>
                <CaloriesBurned/>
            </Grid>
                    
            <Grid item sm={4} md={4} lg={4}>
                  <MinutesActive/>
            </Grid>    
            
            <Grid item sm={4} md={4} lg={4}>
                <PatientMesssageHistory/>
            </Grid>
        </Grid>
        </Grid>

         </div>
        
     )
 }

 export default Workoutplanpage;