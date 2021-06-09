import React from 'react'
import MenuCard from '../MenuCard/MenuCard'
import './FlightInfo.css';

function FlightInfo(props) {
    const {timeingStatus} = props

    function bookFlightHandler(flightDetail){
     localStorage.clear();   
     localStorage.setItem( "flightDetail",JSON.stringify(flightDetail)) 
     props.history.push('/bookflight')

    }

    return (
        <div className="flight-info">
            {timeingStatus.map((item,index)=>(
                <MenuCard key={index} flightDetail={item} navigateBookFlightHandler={bookFlightHandler} />
            ))}

        </div>
    )
}

export default FlightInfo
