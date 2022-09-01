import React, { useEffect, useState } from 'react'
import {BrowserRouter,Route,Link,Switch,NavLink,Routes} from 'react-router-dom'
import App from '../App.css'


const Sever = (data)=>{
//   fetch('https://jsonkeeper.com/b/V7KS').then(res => console.log(res))
//   .catch(err => console.log(err))
console.log(data);
const name = data.data.data[0].name
console.log("nameeeeeee",name);
    return(
        <React.Fragment>
            <div className="row" style={{'background-color': 'black','width': '450px','height': '400px','margin': '10px auto', }}>
                
                    <ul><Link to="/add">
                    <li style={{'paddingTop' : '20px','font-size': '20px','border-style': 'dotted', 'color': 'white'}}>
                    <div style={{'color':'white'}}>{data.data.data[0].name}</div>
                    <div style={{'color':'green'}}>{data.data.data[0].tag}</div>
                    </li>
                    </Link>

                    <Link to="/edit">
                    <li style={{'paddingTop' : '20px','font-size': '20px','border-style': 'dotted', 'color': 'white'}}>
                    <div style={{'color':'white'}}>{data.data.data[1].name}</div>
                    <div style={{'color':'green'}}>{data.data.data[1].tag}</div>
                    </li>
                    </Link>

                    <Link to="/update">
                    <li style={{'paddingTop' : '20px','font-size': '20px','border-style': 'dotted', 'color': 'white'}}>
                    <div style={{'color':'white'}}>{data.data.data[2].name}</div>
                    <div style={{'color':'green'}}>{data.data.data[2].tag}</div>
                    </li>
                    </Link>

                    <Link to="/list">
                    <li style={{'paddingTop' : '20px','font-size': '20px','border-style': 'dotted', 'color': 'white'}}>
                    <div style={{'color':'white'}}>{data.data.data[3].name}</div>
                    <div style={{'color':'red'}}>{data.data.data[3].tag}</div>
                    </li>
                    </Link>

                    <Link to="/delete">
                    <li style={{'paddingTop' : '20px','font-size': '20px','border-style': 'dotted', 'color': 'white'}}>
                    <div style={{'color':'white'}}>{data.data.data[4].name}</div>
                    <div style={{'color':'red'}}>{data.data.data[4].tag}</div>
                    </li>
                    </Link>
                    </ul>
                
            </div>
        </React.Fragment>
    )
}

export default Sever