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
favoriteThings[2];
var favoriteThings2 = [];
favoriteThings2.push(favoriteThings);
favoriteThings2.push(favoriteThings[0,1,2])
alert (favoriteThings2);


//alert(favoriteThings)

//var result =
    $("#output").text(favoriteThings);
    $("#output2").text(favoriteThings2);
  });
});
