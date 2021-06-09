import React,{useEffect,useState} from 'react'
import './BookFlight.css'

function BookFlight() {
   const [flightDetail, setflightDetail] = useState(JSON.parse(localStorage.getItem("flightDetail")))

    useEffect(() => {

    },[])

    return (
        <div className="bookflight-container">
            <h1 className="header">Success</h1>
            Your flight from 
        </div>
    )
}

export default BookFlight
