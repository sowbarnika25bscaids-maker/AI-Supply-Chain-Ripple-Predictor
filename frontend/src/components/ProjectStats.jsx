function ProjectStats({history}){

return(

<div className="bg-white shadow rounded-xl p-5">

<h2 className="font-bold mb-3">

📈 Project Statistics

</h2>

<p>

Total Simulations :
{history.length}

</p>

<p>

High Risk Events :

{

history.filter(
h=>h.risk.risk_level==="High"
).length

}

</p>

</div>

);

}

export default ProjectStats;