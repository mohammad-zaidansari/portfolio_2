let typed = new Typed("#element", {
    strings: ["Frontend Developer", "Designer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  });

  // SOUNDS
  document.querySelectorAll('.playAudio').forEach(function(anchor) {
    anchor.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor behavior
        var audioSrc = anchor.getAttribute('data-audio');
        var audioPlayer = document.getElementById('audioPlayer');
        audioPlayer.src = audioSrc;
        audioPlayer.play();
        
        // Navigate to the href after a slight delay to allow the audio to play
        setTimeout(function() {
            window.location.href = anchor.href;
        }, 400); // Adjust the delay as needed
    });
});



