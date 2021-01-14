$(document).ready(function() {
    initializePage();
});

function initializePage() {
    $('#testjs').click(function(e) {
            $('.jumbotron h1').text("Javascript is connected");
            });
    $("a.thumbnail").click(projectClick);
}

function projectClick(e) {
  // Prevents the page from reloading
  e.preventDefault();
  /*
   * In an event handler, $(this) refers to the object that triggers an event!
   */
  $(this).css("background-color", "#7fff00");
}
