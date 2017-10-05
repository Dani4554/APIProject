//Uses the Giphy API to display gifs based on search tern and on user click
//Author: Daniel Cherrez

//Creates the topics array
var topics = ["Friends", "Blacklist", "how i met your mother", " The Flash", "Seinfield",
							 " The Arrow", "White Collar", "The Big Bang Theory", "The Office",
								"Two and a Half Men"];



//Creates buttons with data atributes for the topics array
for(var i = 0; i < topics.length; i++){

    var topicButton = $("<button>");
    
    topicButton.addClass("topic");

    topicButton.attr("data-topic", topics[i]);

    topicButton.text(topics[i]);

    $("#topicButtons").append(topicButton);

}


//Makes the nessecary url for the API call
var authKey = "YfjiO13LRqqZDr112Qsy8R6iOT62eI4f";

var baseQueryUrl = "http://api.giphy.com/v1/gifs/search?api_key=" + authKey + "&q=";

var searchTerm = "friends";

var limit = "&limit=10";



//On click function that deletes and then populates the topics <div>
$(".topic").on("click", function (){

	$("#topics").empty();
	
	buttonData =  $(this).attr("data-topic");

	searchTerm = buttonData;

	search(searchTerm, baseQueryUrl);

});













// Makes the API call and relays the correct information from the API call
function search (searchTerm, baseQueryUrl){

    var queryUrl = baseQueryUrl + searchTerm + limit;

    $.ajax({
        url: queryUrl,
        method: "GET"
      }).done(function(data) {
    
        console.log(data);
        for(var i = 0; i < data.data.length; i++){
            var imageUrl = data.data[i].images.downsized.url;

            var topicGif = $("<img>");

						topicGif.attr("src", imageUrl);
						
						topicGif.addClass("gif");

            $("#topics").append(topicGif);
        }
    });

}




















