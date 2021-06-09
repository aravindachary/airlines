import React from 'react';
import './MenuCard.css';

function MenuCard(props) {
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const {flightDetail} = props; 
    return (
        <div className="menu-card">
            <div className="flight-label">{flightDetail.name}</div>
            <div className="departure-section">
                <span className="flight-time">{new Date(flightDetail.OriginDestinationOptions[0].FlightSegments[0].DepartureDateTime).getHours()
                                            +":"+new Date(flightDetail.OriginDestinationOptions[0].FlightSegments[0].DepartureDateTime).getMinutes()}</span>
                <span className="location-code">{flightDetail.OriginDestinationOptions[0].FlightSegments[0].DepartureAirportLocationCode}</span>
                <span className="flight-time">{new Date(flightDetail.OriginDestinationOptions[0].FlightSegments[0].DepartureDateTime).getDate()
                                          +" "+months[new Date(flightDetail.OriginDestinationOptions[0].FlightSegments[0].DepartureDateTime).getMonth()] 
                                          +" "+new Date(flightDetail.OriginDestinationOptions[0].FlightSegments[0].DepartureDateTime).getFullYear()}</span>
            </div>
            <div className="duration-section">
                <span className="duration duration-time">10 Hrs 20 Mins</span>
                <span className="duration">1 Stops</span>
            </div>
            <div className="arrival-section">
                <span className="flight-time">{new Date(flightDetail.OriginDestinationOptions[0].FlightSegments[0].ArrivalDateTime).getHours()
                                            +":"+new Date(flightDetail.OriginDestinationOptions[0].FlightSegments[0].ArrivalDateTime).getMinutes()}</span>
                <span className="location-code">{flightDetail.OriginDestinationOptions[0].FlightSegments[0].ArrivalAirportLocationCode}</span>
                <span className="flight-time">{new Date(flightDetail.OriginDestinationOptions[0].FlightSegments[0].ArrivalDateTime).getDate()
                                          +" "+months[new Date(flightDetail.OriginDestinationOptions[0].FlightSegments[0].ArrivalDateTime).getMonth()] 
                                          +" "+new Date(flightDetail.OriginDestinationOptions[0].FlightSegments[0].ArrivalDateTime).getFullYear()}</span>
            </div>
            <div className="price-section" onClick={()=> props.navigateBookFlightHandler(flightDetail)}>
                <span className="booking-label">Book Flight</span>
                <span>
                <span className="booking-label">{flightDetail.AirItineraryPricingInfo.ItinTotalFare.TotalFare.CurrencyCode}</span>
                <span className="currency">{parseFloat(flightDetail.AirItineraryPricingInfo.ItinTotalFare.TotalFare.Amount).toFixed(flightDetail.AirItineraryPricingInfo.ItinTotalFare.TotalFare.DecimalPlaces)}</span>
                </span>
            </div>
        </div>
    )
}

export default MenuCard
