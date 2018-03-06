// window.addEventListener("load", function(){
//     document.getElementById("show-chart-button").addEventListener("click", showChart);
// })

function showChart () {
	var chart = new CanvasJS.Chart("chartContainer", {
		title:{
			text: "BusMall Image Results"
		},
		data: [
		{
			// Change type to "doughnut", "line", "splineArea", etc.
			type: "column",
			dataPoints: imagesArray
		}
		]
	});
	chart.render();
}
