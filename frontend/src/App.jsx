import { useEffect, useState } from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Machines from "./pages/Machines";
import MachineDetails from "./pages/MachineDetails";
import Prediction from "./pages/Prediction";
import Alerts from "./pages/Alerts";
import Maintenance from "./pages/Maintenance";


function MonitorPage() {

  const [machine, setMachine] = useState(null);

  const [temperature, setTemperature] = useState("");
  const [vibration, setVibration] = useState("");
  const [rpm, setRpm] = useState("");

  const [prediction, setPrediction] = useState(null);


  useEffect(() => {

    fetch("http://127.0.0.1:8000/machine-data")

      .then((res) => res.json())

      .then((data) => setMachine(data))

      .catch((err) => console.log(err));


  }, []);



  const predict = async () => {


    const response = await fetch(
      "http://127.0.0.1:8000/predict",
      {

        method:"POST",

        headers:{
          "Content-Type":"application/json",
        },


        body:JSON.stringify({

          temperature:Number(temperature),

          vibration:Number(vibration),

          rpm:Number(rpm),

        }),

      }
    );


    const data = await response.json();

    setPrediction(data);


  };



  return (

    <div className="container">


      <h1>
        AI Smart Machine Health Monitoring
      </h1>



      <div className="card">


        <h2>
          Machine Status
        </h2>


        {

        machine ? 

        (

        <>

        <p>
          <b>Machine ID:</b> {machine.machine_id}
        </p>


        <p>
          <b>Temperature:</b> {machine.temperature} °C
        </p>


        <p>
          <b>Vibration:</b> {machine.vibration}
        </p>


        <p>
          <b>RPM:</b> {machine.rpm}
        </p>


        <p>
          <b>Status:</b> {machine.status}
        </p>


        </>

        )

        :

        <p>
          Loading...
        </p>

        }


      </div>





      <div className="card">


        <h2>
          Predict Machine Health
        </h2>



        <input

          type="number"

          placeholder="Temperature"

          value={temperature}

          onChange={(e)=>setTemperature(e.target.value)}

        />



        <input

          type="number"

          placeholder="Vibration"

          value={vibration}

          onChange={(e)=>setVibration(e.target.value)}

        />



        <input

          type="number"

          placeholder="RPM"

          value={rpm}

          onChange={(e)=>setRpm(e.target.value)}

        />



        <button onClick={predict}>
          Predict
        </button>


      </div>





      {

      prediction &&

      <div className="card">


        <h2>
          Prediction Result
        </h2>


        <p>
          <b>Health Score:</b> {prediction.health_score}
        </p>


        <p>
          <b>Failure Probability:</b> {prediction.failure_probability}
        </p>


        <p>

          <b>
          Maintenance Required:
          </b>

          {prediction.maintenance_required ? " Yes":" No"}

        </p>



        <p>

          <b>
          Recommendation:
          </b>

          {prediction.recommendation}

        </p>



      </div>

      }



    </div>

  );


}





function App(){


return(


<Routes>


<Route 
path="/" 
element={<Login />}
/>



<Route 
path="/dashboard" 
element={<Dashboard />}
/>



<Route 
path="/machines" 
element={<Machines />}
/>



<Route 
path="/machine/:id" 
element={<MachineDetails />}
/>



<Route 
path="/monitor" 
element={<MonitorPage />}
/>



<Route 
path="/prediction" 
element={<Prediction />}
/>



<Route 
path="/alerts" 
element={<Alerts />}
/>



<Route 
path="/maintenance" 
element={<Maintenance />}
/>



</Routes>


);


}


export default App;