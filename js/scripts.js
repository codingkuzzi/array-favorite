// $("form#formOne").submit(function(event) {
//   var someInput = $("input#favorite").val();
//   event.preventDefault();
// });

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var favorite1Input = $("input#favorite1").val();
    var favorite2Input = $("input#favorite2").val();
    var favorite3Input= $("input#favorite3").val();

    var favoriteThings = []

//alert(favorite1Input + "::" + favorite2Input + "::" + favorite3Input)

favoriteThings.push(favorite1Input);
favoriteThings.push(favorite2Input);
favoriteThings.push(favorite3Input);

var favoriteThings2 = [];
// favoriteThings2.push(favoriteThings);
// favoriteThings2.push(favoriteThings[0,1,2])
// alert (favoriteThings2);

favoriteThings2.push(favoriteThings[1]);
favoriteThings2.push(favoriteThings[0]);
favoriteThings2.push(favoriteThings[2]);

//alert(favoriteThings)

//var result =
    $("ul").append($("<li>" + favoriteThings2[0] + "</li>"));
    $("ul").append($("<li>" + favoriteThings2[1] + "</li>"));
    $("ul").append($("<li>" + favoriteThings2[2] + "</li>"));
  });
});
