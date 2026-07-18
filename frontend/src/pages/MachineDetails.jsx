import { useParams } from "react-router-dom";


function MachineDetails(){

const {id}=useParams();


return(

<div className="container">

<h1>
Machine Details
</h1>


<div className="card">

<p>
Machine ID: {id}
</p>

<p>
Temperature: 65°C
</p>

<p>
Vibration: Normal
</p>

<p>
RPM: 1500
</p>

<p>
Status: Healthy
</p>


</div>


</div>

)

}

export default MachineDetails;