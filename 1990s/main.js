console.log("Start loading JSON data...");

$(document).ready(function() {

  $.getJSON('data.json', function(data) {
 
    $.each(data, function(index, entry) {
 
      var container = $('<div class="container"></div>');

 
      container.append('<img src="' + entry.image + '" alt="Image">');
      container.append('<div class="content"><h2>' + entry.name + '</h2><p>' + entry.location + '</p><p>' + entry.date + '</p></div>');
      container.append('<div class="background-story-wrapper"><div class="background-story"><p>' + entry.background + '</p></div></div>');

      $('#container').append(container);
    });
  })
  .fail(function(jqXHR, textStatus, errorThrown) {
    console.error("Error loading JSON data:", textStatus, errorThrown);
  });
});
