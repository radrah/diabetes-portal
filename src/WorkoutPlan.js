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
            <Grid item style={{ width: "25%"}}>
            <Typography class={"header"} variant="h1">Workout-Plan</Typography>
            </Grid>
        </Grid>

            
        <Grid item sm={6} md={6} lg={6}>
            <div className='workoutPlan' style={{width: "98%"}}>
                <table style={{width: "98%"}}>
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
                                <option value="select">Sessions/W</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </td>
                        <td className='workoutColumn'>
                            <select name="repLength" id="repLength">
                                <option value="select">Distance</option>
                                <option value="5">5 </option>
                                <option value="10">10 </option>
                                <option value="15">15 </option>
                                <option value="20">20 </option>
                                <option value="25">25 </option>
                                <option value="30">30 </option>
                            </select>
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
                                <option value="select">Sessions/W</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </td>
                        <td className='workoutColumn'>
                            <select name="repLength" id="repLength">
                                <option value="select">Distance</option>
                                <option value="5">5 </option>
                                <option value="10">10 </option>
                                <option value="15">15 </option>
                                <option value="20">20 </option>
                                <option value="25">25 </option>
                                <option value="30">30 </option>
                            </select>
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
                                <option value="select">Sessions/W</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </td>
                        <td className='workoutColumn'>
                            <select name="repLength" id="repLength">
                                <option value="select">Laps</option>
                                <option value="5">5 </option>
                                <option value="10">10 </option>
                                <option value="15">15 </option>
                                <option value="20">20 </option>
                                <option value="25">25 </option>
                                <option value="30">30 </option>
                            </select>
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
                                <option value="select">Sessions/W</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </td>
                        <td className='workoutColumn'>
                            <select name="repLength" id="repLength">
                                <option value="select">Session Length</option>
                                <option value="5">5 mins</option>
                                <option value="10">10 mins</option>
                                <option value="15">15 mins</option>
                                <option value="20">20 mins</option>
                                <option value="25">25 mins</option>
                                <option value="30">30 mins</option>
                            </select>
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
                            <p> Weightlifting</p>
                        </td>
                        <td className='workoutColumn'>
                            <select name="selectReps" id="selectReps">
                                <option value="select">Select Sets</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </td>
                        <td className='workoutColumn'>
                            <select name="repLength" id="repLength">
                                <option value="select">Select Reps</option>
                                <option value="5">5 </option>
                                <option value="10">10 </option>
                                <option value="15">15 </option>
                                <option value="20">20 </option>
                            </select>
                        </td>
                    </tr>                    
                </table>  
            </div>
            </Grid>
            
            <Grid item sm={4} md={4} lg={4} style={{marginLeft: "65px"}}>
                <PatientProfiles overrides={{"PatientProfiles": { className: "customPatientProfiles" } }}/> 
            </Grid> 

            <Grid container sm={9} md={9} lg={9}>
            <Grid item sm={4} md={4} lg={4}>
                <CaloriesBurned/>
            </Grid>
                    
            <Grid item sm={4} md={4} lg={4} >
                  <MinutesActive/>
            </Grid>    
            
            <Grid item sm={4} md={4} lg={4}>
                <div style={{marginLeft: "20px"}}>
                <PatientMesssageHistory/>
                </div>
            </Grid>
        </Grid>
        </Grid>

         </div>
        
     )
 }

 export default Workoutplanpage;