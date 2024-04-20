import React from 'react'
import Navigation from './mod-ui-components/Navigation';
import AppointmentSchedule from "./ui-components/AppointmentSchedule";
import Calendar from "./ui-components/Calendar";


function Schedulepage(){
    return(
        <div className="App" style={{width: "32%"}}>   
            <Navigation overrides={{"Navigation": { className: "customNavigation" } }} />
            <h1 className='header'>Schedules</h1>
            <div className='scheduleDiv'>
                <div className='flex-container'>
                    <Calendar overrides={{"Calendar": { className: "customCalendar" } }}/>      
                    <AppointmentSchedule overrides={{"AppointmentSchedule": { className: "customAppointmentSchedule" } }}/>    
                </div> 
            </div>
        </div>
    )
}

export default Schedulepage;