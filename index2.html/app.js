var actors = ["Denzel Washington", "Kevin Hart", "Samuel L. Jackson"];

for (let i = 0; i < actors.length; i++) {
    console.log(actors[i]);
    $("#actorButtons").append("<button class='actors' data-search='" + actors[i] + "'>" + actors[i] + "</button>")

}
$("#nameButton").on("click", function (event) {


    event.preventDefault()
    console.log("TEST");
    var input = $("#name").val();

    console.log(input)

    var newButton = $("<button>");
    newButton.addClass("actors");
    newButton.text(input);
    $("#actorButtons").append(newButton);
})

$(".actors").on("click", function () {
    var x = $(this).data("search");
    console.log(x);

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + x + "&api_key=uNbRs2v9pOXzCNRm75DDDxUhJ2RjIzcs&limit=10";
    console.log(queryURL);

    $.ajax({ url: queryURL, method: "GET" })
        .done(function (response) {
            console.log(response);
            for (var i = 0; i < response.data.length; i++) {
                $('body').append("<p>Rating: " + response.data[i].rating + "</p");
                $('body').append("<img src= " + response.data[i].images.downsized.url + ">");

            }
        })
})