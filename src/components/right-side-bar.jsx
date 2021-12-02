// import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../components/stateprovider";
import Calendar from 'react-calendar';
import '../styles/calendar.css'
import React, { useState } from 'react';
import '../styles/right-side-bar.css';
import DoctorIcon from './doctorIcon';


export default function RightSideBar() {

    const context = useContext(AppContext);
    const history = useHistory();
    const [calDate, setCalDate] = useState(new Date())

    function onChange(calDate) {
        // change results based on calendar date click
        setCalDate(calDate)
    }

    function logOut() {
        context.dispatch({
            type: "LOGOUT",
        });

        
            history.push("/login");
        console.log(context);
    }

    return (
        <div className="right-column">
            <div className="logout-container">
                <img src="https://i.ibb.co/qrptfQY/log-out.png" alt="log-out"/>
                <span id="logout-text" onClick={logOut}>Log Out</span>
            </div>
            <div className="main-container">
                <DoctorIcon/>
                <div className="calender-container">
                    <h4 style={{margin: '15% 4% 2% 10%', fontWeight: 'lighter'}}>
                        Calendar</h4>
                    <Calendar className="calendar" onChange={onChange} value={calDate} />
                </div>
            </div>
        </div>
    )
}
