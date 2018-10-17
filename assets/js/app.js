$( document ).ready(function() {
    console.log( "ready!" );
 });
 var animated;
 var still;
 var list = ["dog","cat","hippo","giraffe"];
 for(var i=0;i<list.length;i++){
    var newButton = $("<button>");
    newButton.addClass("btn btn-info animal");
    newButton.attr("data-name",list[i]);
    newButton.html(list[i]);
    $("#listPlace").append(newButton);
    
 
 }
 $(".animal").on("click", function(){
    console.log(event.target.innerHTML)
    var pressed = event.target.innerHTML;
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=fR1WeOtM19cSsAOd4IjdIDeF5RDytJx5&q="+ pressed
 
    $.ajax({
    url: queryURL,
    method: "GET",
 })
    .then(function(response){
        for(var v=3; v < response.data.length; v++ ){
        var still = response.data[0].images.original_still.url;
        var image = $("<img>");
        var animated = response.data[0].images.original.url;
 
        image.attr("src", still);
        image.attr("alt", "image");
 
        $("#listPlace").append(image);
        }
    });
});
    // console.log(queryURL)
    // $("#add-animal").on('click', function(){
    //     var newAnimal = $("#animal-input").val().trim();
    //     list.push(newAnimal);
    //      )};
    // $(document).on('click',function(){
    //     if (this === "still"){
    //         $(this).attr("src", $(this).attr("animated"));
    //     } else{
    //         $(this).attr("src", $(this).attr("still"));
    //     }
    // )};

 

    // Assign a still and animate ID to play/pause GIFs
    $(".gif").on("click", function() {
       
        let state = $(this).attr("data-state");
        if (state === "still"){
          $(this).attr("src", $(this).attr("data-animate"));
          $(this).attr("data-state", "animate");
        } else{ 
          $(this).attr("src", $(this).attr("data-still"));
          $(this).attr ("data-state", "still");
        }
        
    });
  
 
//  Push text input into arena and create dynamic button for them.
//  Organize so it doesn't look godawful
// response.data[0].images.original_still.url;