import axios from 'axios';


export const returnAirLines = (callbackSuccess, callbackErr) => {
  axios.get('/apidata/airlines.json').then((res)=>{
    const airlines = res.data || [];
    callbackSuccess(airlines.sort((item1,item2)=> {
        if(item1.name.toLowerCase() < item2.name.toLowerCase()) { return -1; }
         if(item1.name.toLowerCase() > item2.name.toLowerCase()) { return 1; }
         return 0;
    }));
  }).catch((err)=>{callbackErr(err)})
}

export const returnAirLinesTimingStatus = (callbackSuccess, callbackErr) => {
  axios.get('/apidata/result.json').then((res)=>{
    const timingStaus = res.data.Data.PricedItineraries || [];
    callbackSuccess(timingStaus);
  }).catch((err)=>{callbackErr(err)})
}