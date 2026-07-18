function Alerts(){

return(

<div className="container">


<h1>
🚨 Machine Alerts
</h1>



<div className="card">


<h2>
Active Alerts
</h2>


<p>
🔴 High Temperature Alert
</p>

<p>
Machine: CNC-002
</p>

<p>
Temperature: 85°C
</p>


<hr/>


<p>
🟡 Vibration Warning
</p>

<p>
Machine: Motor-001
</p>

<p>
Vibration Level: Above Normal
</p>


<hr/>


<p>
🟢 System Monitoring Normal
</p>

<p>
All machines operating safely
</p>



</div>





<div className="card">

<h2>
Alert History
</h2>


<p>
18-07-2026 : Temperature warning resolved
</p>


<p>
15-07-2026 : Bearing vibration detected
</p>


<p>
10-07-2026 : Preventive maintenance completed
</p>


</div>



</div>

)

}


export default Alerts;