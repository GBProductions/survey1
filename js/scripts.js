$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    const name = $("input#name").val();
    const dob = $("#dob").val();
    const favColor = $("#fav-color").val();
    const favMusic = $("#music").val();
    const dogCat = $("input:radio[name=dog-cat]:checked").val();

    $("#userName").text(name);
    $("#userDob").text(dob);
    $("#userFavColor").text(favColor);
    $("#userFavMusic").text(favMusic);
    $("#userDogOrCat").text(dogCat);

  });
});