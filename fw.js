window.onload = myMain;
var v = [0,0,0,0,0,0,0];


function myMain(){
	
	document.getElementById("welbeck").onclick = videoWelbeck;
	document.getElementById("giroud").onclick = videoGiroud;
	document.getElementById("alexis").onclick = videoAlexis;
	document.getElementById("gnabry").onclick = videoGnabry;
	document.getElementById("iwobi").onclick = videoIwobi;
	document.getElementById("walcott").onclick = videoWalcott;
	document.getElementById("campbell").onclick = videoCampbell;
	setInterval(timer,1000);
}

function videoWelbeck(){
	if(v[0] == 0)
	{
		v[0] = 1;
		document.getElementById("welbeck").parentNode.insertAdjacentHTML('beforeend',"<p id=\"pwelbeck\">"+"<iframe width=\"600px\" height=\"400px\" src=\"https://www.youtube.com/embed/qG9avASHE9c\" frameborder=\"0\" allowfullscreen></iframe>"+"</p>");
	}
	else{
		v[0] = 0;
		var x = document.getElementById("pwelbeck");
		x.parentNode.removeChild(x);
	}
}
function videoGiroud(){
	if(v[1] == 0)
	{
		v[1] = 1;
		document.getElementById("giroud").parentNode.insertAdjacentHTML('beforeend',"<p id=\"pgiroud\">"+"<iframe width=\"600px\" height=\"400px\" src=\"https://www.youtube.com/embed/0XfNliryf0Y\" frameborder=\"0\" allowfullscreen></iframe>"+"</p>");
	}
	else{
		v[1] = 0;
		var x = document.getElementById("pgiroud");
		x.parentNode.removeChild(x);
	}
}
function videoAlexis(){
	if(v[2] == 0)
	{
		v[2] = 1;
		document.getElementById("alexis").parentNode.insertAdjacentHTML('beforeend',"<p id=\"palexis\">"+"<iframe width=\"600px\" height=\"400px\" src=\"https://www.youtube.com/embed/5bVb1jqJLH8\" frameborder=\"0\" allowfullscreen></iframe>"+"</p>");
	}
	else{
		v[2] = 0;
		var x = document.getElementById("palexis");
		x.parentNode.removeChild(x);
	}
}
function videoGnabry(){
	if(v[3] == 0)
	{
		v[3] = 1;
		document.getElementById("gnabry").parentNode.insertAdjacentHTML('beforeend',"<p id=\"pgnabry\">"+"<iframe width=\"600px\" height=\"400px\" src=\"https://www.youtube.com/embed/AEiduhuir6U\" frameborder=\"0\" allowfullscreen></iframe>"+"</p>");
	}
	else{
		v[3] = 0;
		var x = document.getElementById("pgnabry");
		x.parentNode.removeChild(x);
	}
}
function videoIwobi(){
	if(v[4] == 0)
	{
		v[4] = 1;
		document.getElementById("iwobi").parentNode.insertAdjacentHTML('beforeend',"<p id=\"piwobi\">"+"<iframe width=\"600px\" height=\"400px\" src=\"https://www.youtube.com/embed/0B3Jyo9qM-s\" frameborder=\"0\" allowfullscreen></iframe>"+"</p>");
	}
	else{
		v[4] = 0;
		var x = document.getElementById("piwobi");
		x.parentNode.removeChild(x);
	}
}


function videoWalcott(){
	if(v[5] == 0)
	{
		v[5] = 1;
		document.getElementById("walcott").parentNode.insertAdjacentHTML('beforeend',"<p id=\"pwalcott\">"+"<iframe width=\"600px\" height=\"400px\" src=\"https://www.youtube.com/embed/oOj0sEONcSw\" frameborder=\"0\" allowfullscreen></iframe>"+"</p>");
	}
	else{
		v[5] = 0;
		var x = document.getElementById("pwalcott");
		x.parentNode.removeChild(x);
	}
}

function videoCampbell(){
	if(v[6] == 0)
	{
		v[6] = 1;
		document.getElementById("campbell").parentNode.insertAdjacentHTML('beforeend',"<p id=\"pcambell\">"+"<iframe width=\"600px\" height=\"400px\" src=\"https://www.youtube.com/embed/kmU0LSdx7yY\" frameborder=\"0\" allowfullscreen></iframe>"+"</p>");
	}
	else{
		v[6] = 0;
		var x = document.getElementById("pcambell");
		x.parentNode.removeChild(x);
	}
}

function timer(){
	var d = new Date();
	document.getElementById("ceas").innerHTML = d.toLocaleTimeString();
	
}