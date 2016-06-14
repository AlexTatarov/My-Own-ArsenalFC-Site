window.onload = myMain;
var v = [0,0];


function myMain(){
	document.getElementById("ospina").onclick = videoOspina;
	document.getElementById("cech").onclick = videoCech;
	setInterval(timer,1000);
}
function videoOspina(){
	
	if(v[0] == 0)
	{
		
		v[0] = 1;
		
		document.getElementById("ospina").parentNode.insertAdjacentHTML('beforeend',"<p id=\"pcech\">"+"<iframe width=\"600px\" height=\"400px\" src=\"https://www.youtube.com/embed/ECGZJdA5L00\" frameborder=\"0\" allowfullscreen></iframe>"+"</p>");
	}
	else{
		v[0]=0;
		var x = document.getElementById("pcech");
		x.parentNode.removeChild(x);
	}
}
function videoCech(){
	
	if(v[1] == 0)
	{
		v[1] = 1;
		document.getElementById("cech").parentNode.insertAdjacentHTML('beforeend',"<p id=\"pospina\">"+"<iframe width=\"600px\" height=\"400px\" src=\"https://www.youtube.com/embed/nFXCXKQmnIQ\" frameborder=\"0\" allowfullscreen></iframe>"+"</p>");
	}
	else
	{
		v[1] = 0;
		var x = document.getElementById("pospina");
		x.parentNode.removeChild(x);
	}
}

function timer(){
	var d = new Date();
	document.getElementById("ceas").innerHTML = d.toLocaleTimeString();
	
}