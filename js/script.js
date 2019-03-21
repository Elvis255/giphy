// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
    var userInput=$("#search-term").val();
   var url = "https://api.giphy.com/v1/gifs/search?q="+userInput+"&rating=pg&api_key=dc6zaTOxFJmzC"
   $.ajax({
        url: url,
        method: "GET",
        success: function(response){
            if (response.data.length > 0) {
                $('body').append("<img src= "+response.data[0].images.original_still.url+ ">" );
            }
        },
    });


});

