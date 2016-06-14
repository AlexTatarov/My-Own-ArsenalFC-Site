window.onload = myMain;


function myMain(){
	setTimeout(function(){alert("Cu ajutorul tastelor 'a' si 'b' pot fi schimbate stilurile articolelor");},5000);
	window.addEventListener('keypress',function(event)
	{
		
		if(event.keyCode == 97)
		{
			$(".articol").css("background-color","#EDC9AF");
			$(".articol h2").css("background-color","#E55B3C");
			$(".articol").css("font-size","25px");
			$(".articol img").css("float","right");
		}
		else if(event.keyCode == 98)
		{
			$(".articol").css("background-color","#736F6E");
			$(".articol h2").css("background-color","#E42217");
			$(".articol").css("font-size","20px");
			$(".articol img").css("float","left");
		}
	});
	setInterval(timer,1000);
	
}
function timer(){
	var d = new Date();
	document.getElementById("ceas").innerHTML = d.toLocaleTimeString();
	
}



