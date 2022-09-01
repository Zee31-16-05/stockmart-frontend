import React, { useEffect, useState } from 'react'
import App from '../App.css'

const Reversal = (data) => {

    return(
        <React.Fragment>
            <div className="row12">

                <div className="col12">{data.data.data[2].name}
                <div className="sev">{data.data.data[2].tag}</div>
                <div className="body1">{data.data.data[2].criteria[0].text}</div>

                </div>
                
            </div>
        </React.Fragment>
    )
}

export default Reversal;