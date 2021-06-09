import React from 'react';
import './Filter.css';

function Filter(props) {
    const {airlines = []} = props
    return (
        <div className="airline-bar">
            <header className="airline-label">Filter by airlines</header>
            <div className="filter-list">
              {airlines.map((item,index)=>(
             <div key = {index+"-"+index}>
            <label className="container">{item.name}
            <input  type="checkbox" onChange={(event)=>props.airlinesClickHandler(event,item)}/>
            <span   className="checkmark"></span>
            </label>
             </div>   
            ))}
            </div>
        </div>
    )
}

export default Filter
