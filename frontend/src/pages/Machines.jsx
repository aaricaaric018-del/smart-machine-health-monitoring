import { Link } from "react-router-dom";


function Machines(){

const machines=[
{
id:1,
name:"CNC Machine",
status:"Healthy"
},

{
id:2,
name:"Motor Machine",
status:"Warning"
}

];


return(

<div className="container">

<h1>
Machines
</h1>


{
machines.map((machine)=>(

<div className="card" key={machine.id}>

<h2>{machine.name}</h2>

<p>Status: {machine.status}</p>


<Link to={`/machine/${machine.id}`}>
<button>
View Details
</button>
</Link>


</div>

))

}

</div>

)

}

export default Machines;