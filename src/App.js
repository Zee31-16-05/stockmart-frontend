// import logo from './logo.svg';
import './App.css';
import main from './components/main';
import Sever from './components/Sever'
import Comen from './components/Comen'
import Tcl from './components/Tcl';
import High from './components/High';
import Reversal from './components/Reversal';
import Rsing from './components/Rsing';
import {BrowserRouter,Route,Link,Switch,NavLink,Routes} from 'react-router-dom'
import axios from "axios";
import {useState, useEffect} from 'react';

const App =  ()=> {

  let [stockData, setStockData] = useState(null);

  useEffect(() => {
    try{  
      axios('http://localhost:7001/api')
      .then(data => setStockData(data));
    }
    catch (e){
      console.log("error",e);
    }
  },[]);  

    return !stockData? <div>Loading</div> :  
    (
      <BrowserRouter>
      <Routes >
        <Route path="/" element={<Sever data={stockData}/>}/>
        <Route path="/add" element={<Comen data={stockData}/>} />
        <Route path="/edit" element={<Tcl data={stockData}/>} />
        <Route path="/delete" element={<High data={stockData}/>} />
        <Route path="/list" element={<Rsing data={stockData}/>} />
        <Route path="/update" element={<Reversal data={stockData}/>} />
      </Routes>
      </BrowserRouter>
    );


}

export default App;
