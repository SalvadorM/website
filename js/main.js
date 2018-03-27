
function dropFunction(){
	document.getElementById("menuIcon").style.display = "none";
	document.getElementById("logoTab").style.display = "none";
	document.getElementById("navmenu").classList.add("buttonNav");
	
	var tabs = document.getElementsByClassName("nav-tab");
	for (var i = 0; i < tabs.length; i++){
		var tab = tabs[i];
		tab.classList.add("dropmenu");
		console.log("add");
	}

}

window.onclick = function(event){
	if( (!event.target.matches(".menu-icon"))){
		var tabs = document.getElementsByClassName("nav-tab");
		for (var i = 0; i < tabs.length; i++){
			var tab = tabs[i];
			tab.classList.remove("dropmenu");
			console.log("remove");
		}
		document.getElementById("menuIcon").style.display = "inline-block";
		document.getElementById("logoTab").style.display = "inline-block";
	}
}