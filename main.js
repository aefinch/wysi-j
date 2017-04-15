var peoples = [
	{
		title: "Real Estate Agent",
		name: "Phil Dunphy",
		bio: "Successful real estate agent and father in the show Modern Family. Extremely corny.",
		image: "http://d1stfe5sz9ezud.cloudfront.net/wp-content/uploads/2013/11/04124bd9f79e04594457d02e80dfdd16.gif",
	 	lifespan: {
	    	birth: 2009,
	    	death: 2017
	  }
	},
	{
		title: "EPA",
	 	name: "Environmental Protection Agency",
	 	bio: "Government agency created to protect the enviornment and enforce regualations to keep people healthy.",
	 	image: "https://pbs.twimg.com/profile_images/632228259879628800/-gvVhzPn_400x400.png",
	 	lifespan: {
	    	birth: 1970,
	    	death: 2017
	  	}
	},
	{
		title: "US President",
	 	name: "George Washington",
	 	bio: "First president of the United States.",
	 	image: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg",
	 	lifespan: {
	    	birth: 1732,
	    	death: 1799
	  	}	
	}
]

function updateBio(event){
	var bio = $(".dotBorder").find(".bio");
	var input = $("#userInput").val();
	if (event.keyCode===13){
		$("#userInput").val(" ");
	} else if(input!==""){
		bio.html(input);
	}
}

function addBorder(){
	$(".person").removeClass("dotBorder")
	$(this).addClass("dotBorder");
	$("#userInput").val("").focus();
	$("#userInput").keyup(updateBio)
};

function addEventListeners(){
	 $("#container").on("click", ".person", addBorder);

}
(function loadPage(){
	$("#everything").html("<input type='text' name='userInput' id='userInput'><br><div class='container' id='container'></div>");
	for (var i=0; i<peoples.length; i++){
		$("#container").append(`<div class = "person" id = "person${i+1}"><header><h3>${peoples[i].name}</h3><br>${peoples[i].title}</header><section><img class = "picture" src="${peoples[i].image}"><br><p class = "bio" id="cap${i}">${peoples[i].bio}</p></section><footer>Lifespan: ${peoples[i].lifespan.birth}-${peoples[i].lifespan.death}<br></footer><br></div>`);
	}
	$(".person:even").addClass("yellow");
	$(".person:odd").addClass("blue");
	addEventListeners();
})();

