import { Link } from "react-router-dom";


function Dashboard(){


return(

<div className="dashboard">


<h1>
Machine Health Dashboard
</h1>


<p className="subtitle">
AI-powered predictive maintenance monitoring system
</p>



<div className="dashboard-grid">



<Link to="/monitor" className="dashboard-card">

<h2>
⚙️ Machines
</h2>

<p>
Monitor real-time machine health data
</p>

</Link>





<Link to="/prediction" className="dashboard-card">

<h2>
🤖 AI Prediction
</h2>

<p>
Analyze failure probability and health score
</p>

</Link>





<Link to="/alerts" className="dashboard-card">

<h2>
🚨 Alerts
</h2>

<p>
View machine warnings and critical issues
</p>

</Link>





<Link to="/maintenance" className="dashboard-card">

<h2>
🔧 Maintenance
</h2>

<p>
Track service history and schedules
</p>

</Link>




</div>



</div>

)

}


export default Dashboard;