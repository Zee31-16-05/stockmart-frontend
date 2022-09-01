import React, { useEffect, useState } from 'react'
import App from '../App.css'

const Rsing = (data) =>{

    return(
        <React.Fragment>
            <div className="row12">

                <div className="col12">{data.data.data[3].name}
                <div className="sev1">{data.data.data[3].tag}</div>
                <div className="bod">{data.data.data[3].criteria[0].text}</div>

                </div>
                
            </div>
        </React.Fragment>
    )
}

export default Rsing;