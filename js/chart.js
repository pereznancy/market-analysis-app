<<<<<<< HEAD
// window.addEventListener("load", function(){
//     document.getElementById("show-chart-button").addEventListener("click", showChart);
// })
=======
window.addEventListener("load", function(){
    document.getElementById("show-chart-button").addEventListener("click", showChart);
})
>>>>>>> 4046618567e797bcaf037be5704f86898c825f72

function showChart () {
	var chart = new CanvasJS.Chart("chartContainer", {
		title:{
<<<<<<< HEAD
			text: "BusMall Image Results"
		},
		data: [
=======
			text: "BusMall Image Results"              
		},
		data: [              
>>>>>>> 4046618567e797bcaf037be5704f86898c825f72
		{
			// Change type to "doughnut", "line", "splineArea", etc.
			type: "column",
			dataPoints: imagesArray
		}
		]
	});
	chart.render();
}
