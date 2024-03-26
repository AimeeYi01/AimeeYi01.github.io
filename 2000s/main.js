console.log("Start loading JSON data...");

$(document).ready(function() {
  // Load JSON data
  $.getJSON('data.json', function(data) {
    // Iterate through each entry in the JSON data
    $.each(data, function(index, entry) {
      // Create a container for each entry
      var container = $('<div class="container"></div>');

      // Populate container with data
      container.append('<img src="' + entry.image + '" alt="Image">');
      container.append('<div class="content"><h2>' + entry.name + '</h2><p>' + entry.location + '</p><p>' + entry.time + '</p></div>');
      container.append('<div class="background-story-wrapper"><div class="background-story"><p>' + entry.story + '</p></div></div>');

      // Append container to the page
      $('#container').append(container);
    });
  });
});

