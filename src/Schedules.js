import React from 'react'
import Navigation from './mod-ui-components/Navigation';
import AppointmentSchedule from "./ui-components/AppointmentSchedule";
import Calendar from "./ui-components/Calendar";


function Schedulepage(){
    return(
        <div className="App" style={{width: "32%", height: "30%"}}>   
            <Navigation overrides={{"Navigation": { className: "customNavigation" } }} />
            <div className='scheduleDiv'>
                <h1 className='header'>Schedules</h1>
                <div className='flex-container'>
                    <Calendar overrides={{"Calendar": { className: "customCalendar" } }}/>      
                    <AppointmentSchedule overrides={{"AppointmentSchedule": { className: "customAppointmentSchedule" } }}/>    
                </div> 
            </div>
        </div>
    )
}

export default Schedulepage;