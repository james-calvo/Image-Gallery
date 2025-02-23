$(document).ready(function () {
    var imageThumbs = $("#image-thumbs");
    var currentImage = $("#current-image");
    
    for (var i = 1; i <= 10; i++) {
      var thumb = $('<img>', {
        src: "images/image" + i + ".jpg",
        alt: "Image " + i,
        class: "thumb"
      });
      imageThumbs.append(thumb);
    }
    
    $(".thumb").click(function () {
      var newSrc = $(this).attr("src");
      currentImage.fadeOut(300, function () {
        currentImage.attr("src", newSrc).fadeIn(300);
      });
    });
  });