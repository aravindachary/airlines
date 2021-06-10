import React,{useEffect,useState} from 'react'
import './BookFlight.css'

function BookFlight() {
   const [flightDetail, setflightDetail] = useState(JSON.parse(localStorage.getItem("flightDetail")))
   const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]; 
    
   useEffect(() => {
        console.log('flightDetail',flightDetail)
    },[])

    return (
        <div className="bookflight-container">
            <h1 className="header">Success</h1>
           <div className="status">Your flight from 
            <span className="location">{flightDetail.OriginDestinationOptions[0].FlightSegments[0].DepartureAirportLocationCode} -
            {flightDetail.OriginDestinationOptions[0].FlightSegments[0].ArrivalAirportLocationCode+" "}</span>
            on <span className="location">{" "+new Date(flightDetail.OriginDestinationOptions[0].FlightSegments[0].DepartureDateTime).getDate()
                                          +" "+months[new Date(flightDetail.OriginDestinationOptions[0].FlightSegments[0].DepartureDateTime).getMonth()] 
                                          +" "+new Date(flightDetail.OriginDestinationOptions[0].FlightSegments[0].DepartureDateTime).getFullYear()}</span>                            
            </div>
             <div className="confirm">is confirmed</div> 
        </div>
    )
}

export default BookFlight
