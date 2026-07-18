function MachineStatus({machine}) {

return (

<div className="card">

<h2>Machine Status</h2>

{machine ? (
<>
<p><b>Machine ID:</b> {machine.machine_id}</p>

<p><b>Temperature:</b> {machine.temperature} °C</p>

<p><b>Vibration:</b> {machine.vibration}</p>

<p><b>RPM:</b> {machine.rpm}</p>

<p><b>Status:</b> {machine.status}</p>
</>
)
:
<p>Loading...</p>
}

</div>

)

}

export default MachineStatus;