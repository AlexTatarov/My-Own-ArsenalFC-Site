window.onload = myMain;
function myMain(){
	setInterval(timer,1000);
	
}


function timer(){
	var d = new Date();
	document.getElementById("ceas").innerHTML = d.toLocaleTimeString();
	
}
