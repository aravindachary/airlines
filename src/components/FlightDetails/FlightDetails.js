import React, { Component } from 'react'
import FlightInfo from '../FilghtInfo/FlightInfo'
import Filter from '../Filter/Filter';
import { returnAirLines,returnAirLinesTimingStatus } from '../Service/ServiceApi';
import './FlightDetails.css';

export class FlightDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
             airlines:[],
             timeingStatus:[],
             filteredFlightInfo:[],
             selectedFlight: []
        }

    }
    componentDidMount = ()=>{
        returnAirLines((airlines)=>{
              this.setState({airlines},()=>{
                  this.arilineResult(airlines)
              });
            },()=>{}
        )
        
    }

    arilineResult= (airlines)=>{
     returnAirLinesTimingStatus((timeingStatus)=>{
            const tempMap = this.mapping(airlines,timeingStatus);
              this.setState({timeingStatus:tempMap,filteredFlightInfo:tempMap});
            },()=>{}
        )
    }

    mapping(airlines,timeingStatus){
      airlines.forEach((airline)=>{
          timeingStatus.forEach((timing)=>{
              if(airline.iata === timing.ValidatingAirlineCode){
                  timing.name = airline.name;
              }
          });

      })
     return timeingStatus
    }

    airlinesClickHandler=(event,airline)=> {

    const {selectedFlight = []} = this.state;     
    let listOfCheckedItem = [...selectedFlight] ;
     if(event.target.checked){
         listOfCheckedItem.push(airline.iata);
     } else {
        const index = listOfCheckedItem.findIndex((item)=> item === airline.iata)
        if(index >=0) {
            listOfCheckedItem.splice(index,1);
         }

     }
    this.setState({ 
      selectedFlight: listOfCheckedItem ,  
      filteredFlightInfo: listOfCheckedItem.length <= 0 ? this.state.timeingStatus : this.state.timeingStatus.filter(function(result) {
         if( listOfCheckedItem.includes (result.ValidatingAirlineCode)){
             return result;
         }
      })
    });

    }
    render() {
        const { airlines = [], filteredFlightInfo = [] } = this.state;
        return (      
        <div className="grid-container">
            <div className="grid-item">
              <Filter airlines={airlines} airlinesClickHandler={this.airlinesClickHandler}/>
            </div> 
            <div>
             <FlightInfo timeingStatus={filteredFlightInfo} history={this.props.history}/>
            </div> 
        </div>
        )
    }
}

export default FlightDetails
