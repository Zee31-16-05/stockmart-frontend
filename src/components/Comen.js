import React, { useEffect, useState } from 'react'
import App from '../App.css'

const Comen = (data) => {

    return(
        <React.Fragment>
            <div className="row12">

                <div className="col12">{data.data.data[0].name}
                <div className="sev">{data.data.data[0].tag}</div>
                <div className="body1">{data.data.data[0].criteria[0].text}</div>

                </div>
                
            </div>
        </React.Fragment>
    )
}

export default Comen