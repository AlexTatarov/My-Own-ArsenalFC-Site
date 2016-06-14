window.onload = myMain;
var v = [0,0,0,0,0,0,0];


function myMain(){
	document.getElementById("gibbs").onclick = videoGibbs;
	document.getElementById("mertesacker").onclick = videoMertesacker;
	document.getElementById("koscielny").onclick = videoKoscielny;
	document.getElementById("gabriel").onclick = videoGabriel;
	document.getElementById("bellerin").onclick = videoBellerin;
	document.getElementById("chambers").onclick = videoChambers;
	document.getElementById("monreal").onclick = videoMonreal;
	setInterval(timer,1000);
}
function videoGibbs(){
	if(v[0] == 0)
	{
		v[0] = 1;
		document.getElementById("gibbs").parentNode.insertAdjacentHTML('beforeend',"<p id=\"pgibbs\">"+"<iframe width=\"600px\" height=\"400px\" src=\"https://www.youtube.com/embed/4UwLf_8BTpA\" frameborder=\"0\" allowfullscreen></iframe>"+"</p>");
	}
	else{
		v[0] = 0;
		var x = document.getElementById("pgibbs");
		x.parentNode.removeChild(x);
	}
}

function videoMertesacker(){
	if(v[1] == 0)
	{
		v[1] = 1;
		document.getElementById("mertesacker").parentNode.insertAdjacentHTML('beforeend',"<p id=\"pmertesacker\">"+"<iframe width=\"600px\" height=\"400px\" src=\"https://www.youtube.com/embed/dNpSLtClIGE\" frameborder=\"0\" allowfullscreen></iframe>"+"</p>");
	}
	else{
		v[1] = 0;
		var x = document.getElementById("pmertesacker");
		x.parentNode.removeChild(x);
	}
}
function videoKoscielny(){
	if(v[2] == 0)
	{
		v[2] = 1;
		document.getElementById("koscielny").parentNode.insertAdjacentHTML('beforeend',"<p id=\"pkoscielny\">"+"<iframe width=\"600px\" height=\"400px\" src=\"https://www.youtube.com/embed/lEUwogrNM00\" frameborder=\"0\" allowfullscreen></iframe>"+"</p>");
	}
	else{
		v[2] = 0;
		var x = document.getElementById("pkoscielny");
		x.parentNode.removeChild(x);
	}
}
function videoMonreal(){
	if(v[3] == 0)
	{
		v[3] = 1;
		document.getElementById("monreal").parentNode.insertAdjacentHTML('beforeend',"<p id=\"pmonreal\">"+"<iframe width=\"600px\" height=\"400px\" src=\"https://www.youtube.com/embed/7h4U8IGC7U8\" frameborder=\"0\" allowfullscreen></iframe>"+"</p>");
	}
	else{
		v[3] = 0;
		var x = document.getElementById("pmonreal");
		x.parentNode.removeChild(x);
	}
}

function videoGabriel(){
	if(v[4] == 0)
	{
		v[4] = 1;
		document.getElementById("gabriel").parentNode.insertAdjacentHTML('beforeend',"<p id=\"pgabriel\">"+"<iframe width=\"600px\" height=\"400px\" src=\"https://www.youtube.com/embed/sK7vVWdHfBc\" frameborder=\"0\" allowfullscreen></iframe>"+"</p>");
	}
	else{
		v[4] = 0;
		var x = document.getElementById("pgabriel");
		x.parentNode.removeChild(x);
	}
}

function videoBellerin(){
	if(v[5] == 0)
	{
		v[5] = 1;
		document.getElementById("bellerin").parentNode.insertAdjacentHTML('beforeend',"<p id=\"pbellerin\">"+"<iframe width=\"600px\" height=\"400px\" src=\"https://www.youtube.com/embed/Pe-S0BI2IGQ\" frameborder=\"0\" allowfullscreen></iframe>"+"</p>");
	}
	else{
		v[5] = 0;
		var x = document.getElementById("pbellerin");
		x.parentNode.removeChild(x);
	}
}
function videoChambers(){
	if(v[6] == 0)
	{
		v[6] = 1;
		document.getElementById("chambers").parentNode.insertAdjacentHTML('beforeend',"<p id=\"pchambers\">"+"<iframe width=\"600px\" height=\"400px\" src=\"https://www.youtube.com/embed/MDiswyudq-o\" frameborder=\"0\" allowfullscreen></iframe>"+"</p>");
	}
	else{
		v[6] = 0;
		var x = document.getElementById("pchambers");
		x.parentNode.removeChild(x);
	}
}

function timer(){
	var d = new Date();
	document.getElementById("ceas").innerHTML = d.toLocaleTimeString();
	
}
