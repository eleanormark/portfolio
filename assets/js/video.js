/*
* Check if video can play, and play it
*/
(function() {
    var video = document.getElementById("my-video");
    video.addEventListener( "canplay", function() {
        video.play();
    });
})();