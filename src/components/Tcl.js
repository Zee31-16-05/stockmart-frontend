import React, { useEffect, useState } from 'react'
import App from '../App.css'

const Tcl = (data) =>{

    return(
        <React.Fragment>
            <div className="row12">
                <div className="col12">{data.data.data[1].name}
                <div className="sev">{data.data.data[1].tag}</div>
                <div className="body1">{data.data.data[1].criteria[0].text}</div>   
                <div className="and1">and</div>
                <div className="body2">{data.data.data[1].criteria[1].text} </div>
                <div className="and2">and</div>
                <div className="body3">{data.data.data[1].criteria[2].text}</div>
                </div>
                
                
            </div>
        </React.Fragment>
    )
}

export default Tcl;