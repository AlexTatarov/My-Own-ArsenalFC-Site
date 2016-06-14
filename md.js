window.onload = myMain;
var v = [0,0,0,0,0,0,0,0,0,0];
function myMain(){
	document.getElementById("rosicky").onclick = videoRosicky;
	document.getElementById("arteta").onclick = videoArteta;
	document.getElementById("wilshere").onclick = videoWilshere;
	document.getElementById("ozil").onclick = videoOzil;
	document.getElementById("ramsey").onclick = videoRamsey;
	document.getElementById("flamini").onclick = videoFlamini;
	document.getElementById("oxlade").onclick = videoOxlade;
	document.getElementById("elneny").onclick = videoElneny;
	document.getElementById("cazorla").onclick = videoCazorla;
	document.getElementById("coquelin").onclick = videoCoquelin;
	setInterval(timer,1000);
	
}

function videoRosicky(){
	if(v[0] == 0)
	{
		v[0] = 1;
		document.getElementById("rosicky").parentNode.insertAdjacentHTML('beforeend',"<p id=\"prosicky\">"+"<iframe width=\"600px\" height=\"400px\" src=\"https://www.youtube.com/embed/DyJeJ8bXMT8\" frameborder=\"0\" allowfullscreen></iframe>"+"</p>");
	}
	else{
		v[0] = 0;
		var x = document.getElementById("prosicky");
		x.parentNode.removeChild(x);
	}
}

function videoArteta(){
	if(v[1] == 0)
	{
		v[1] = 1;
		document.getElementById("arteta").parentNode.insertAdjacentHTML('beforeend',"<p id=\"parteta\">"+"<iframe width=\"600px\" height=\"400px\" src=\"https://www.youtube.com/embed/98xvudh4aB4\" frameborder=\"0\" allowfullscreen></iframe>"+"</p>");
	}
	else{
		v[1] = 0;
		var x = document.getElementById("parteta");
		x.parentNode.removeChild(x);
	}
}

function videoWilshere(){
	if(v[2] == 0)
	{
		v[2] = 1;
		
		document.getElementById("wilshere").parentNode.insertAdjacentHTML('beforeend',"<p id=\"pwilshere\">"+"<iframe width=\"600px\" height=\"400px\" src=\"https://www.youtube.com/embed/NJXnR3YFkKc\" frameborder=\"0\" allowfullscreen></iframe>"+"</p>");
	}
	else{
		v[2] = 0;
		var x = document.getElementById("pwilshere");
		x.parentNode.removeChild(x);
	}
}

function videoOzil(){
	if(v[3] == 0)
	{
		v[3] = 1;
		document.getElementById("ozil").parentNode.insertAdjacentHTML('beforeend',"<p id=\"pozil\">"+"<iframe width=\"600px\" height=\"400px\" src=\"https://www.youtube.com/embed/NuwyL1VqItU\" frameborder=\"0\" allowfullscreen></iframe>"+"</p>");
	}
	else{
		v[3] = 0;
		var x = document.getElementById("pozil");
		x.parentNode.removeChild(x);
	}
}
function videoRamsey(){
	if(v[4] == 0)
	{
		v[4] = 1;
		document.getElementById("ramsey").parentNode.insertAdjacentHTML('beforeend',"<p id=\"pramsey\">"+"<iframe width=\"600px\" height=\"400px\" src=\"https://www.youtube.com/embed/c9ezHtRC1zs\" frameborder=\"0\" allowfullscreen></iframe>"+"</p>");
	}
	else{
		v[4] = 0;
		var x = document.getElementById("pramsey");
		x.parentNode.removeChild(x);
	}
}
function videoOxlade(){
	if(v[5] == 0)
	{
		v[5] = 1;
		document.getElementById("oxlade").parentNode.insertAdjacentHTML('beforeend',"<p id=\"poxlade\">"+"<iframe width=\"600px\" height=\"400px\" src=\"https://www.youtube.com/embed/1_-SIgWRwnA\" frameborder=\"0\" allowfullscreen></iframe>"+"</p>");
	}
	else{
		v[5] = 0;
		var x = document.getElementById("poxlade");
		x.parentNode.removeChild(x);
	}
}
function videoFlamini(){
	if(v[6] == 0)
	{
		v[6] = 1;
		document.getElementById("flamini").parentNode.insertAdjacentHTML('beforeend',"<p id=\"pflamini\">"+"<iframe width=\"600px\" height=\"400px\" src=\"https://www.youtube.com/embed/H2uozGQ7VmQ\" frameborder=\"0\" allowfullscreen></iframe>"+"</p>");
	}
	else{
		v[6] = 0;
		var x = document.getElementById("pflamini");
		x.parentNode.removeChild(x);
	}
}

function videoCazorla(){
	if(v[7] == 0)
	{
		v[7] = 1;
		document.getElementById("cazorla").parentNode.insertAdjacentHTML('beforeend',"<p id=\"pcazorla\">"+"<iframe width=\"600px\" height=\"400px\" src=\https://www.youtube.com/embed/bT2jpUzQiEE\" frameborder=\"0\" allowfullscreen></iframe>"+"</p>");
	}
	else{
		v[7] = 0;
		var x = document.getElementById("pcazorla");
		x.parentNode.removeChild(x);
	}
}
function videoElneny(){
	if(v[8] == 0)
	{
		v[8] = 1;
		document.getElementById("elneny").parentNode.insertAdjacentHTML('beforeend',"<p id=\"pelneny\">"+"<iframe width=\"600px\" height=\"400px\" src=\"https://www.youtube.com/embed/TikTLirJk1Q\" frameborder=\"0\" allowfullscreen></iframe>"+"</p>");
	}
	else{
		v[8] = 0;
		var x = document.getElementById("pelneny");
		x.parentNode.removeChild(x);
	}
}

function videoCoquelin(){
	if(v[9] == 0)
	{
		v[9] = 1;
		document.getElementById("coquelin").parentNode.insertAdjacentHTML('beforeend',"<p id=\"pcoquelin\">"+"<iframe width=\"600px\" height=\"400px\" src=\"https://www.youtube.com/embed/DlYihAjPpUI\" frameborder=\"0\" allowfullscreen></iframe>"+"</p>");
	}
	else{
		v[9] = 0;
		var x = document.getElementById("pcoquelin");
		x.parentNode.removeChild(x);
	}
}

function timer(){
	var d = new Date();
	document.getElementById("ceas").innerHTML = d.toLocaleTimeString();
	
}