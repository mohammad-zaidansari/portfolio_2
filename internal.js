function navigateTo(event, sectionId) {
    event.preventDefault();
    const sections = document.querySelectorAll(".content");
    sections.forEach((section) => {
      section.style.display = "none";
    });
    document.getElementById(sectionId).style.display = "block";

    const links = document.querySelectorAll(".sidebar a");
    links.forEach((link) => {
      link.classList.remove("current");
    });
    event.target.classList.add("current");
  }


  const inputs = document.querySelectorAll("input, textarea");
  const keySounds = [
    new Audio("audio/static_audio_keyboard_key_1.mp3"),
    new Audio("audio/static_audio_keyboard_key_2.mp3"),
    new Audio("audio/static_audio_keyboard_key_3.mp3"),
    new Audio("audio/static_audio_keyboard_key_5.mp3"),
    new Audio("audio/static_audio_keyboard_key_6.mp3"),
  ];
  inputs.forEach((input) => {
    input.addEventListener("keydown", () => {
      const randomIndex = Math.floor(Math.random() * keySounds.length);
      keySounds[randomIndex].currentTime = 0;
      keySounds[randomIndex].play();
    });
  });


//   SOUNDS

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


// let btn = document.getElementsByClassName('.btn');
// let Inputs = document.getElementsByClassName('.txt');

// btn.addEventListener('click', () => {
//   Inputs.forEach( input => input.value = '');
// });



// SHEET CONTACT FORM
const scriptURL = 'https://script.google.com/macros/s/AKfycbyzGu3sdr8tbyvYkJSJJlAJNJu-rp1Bf8-2vwGY7etKLcH8ZgzjMKV7B8V7OD-uvmRu/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
    .catch(error => console.error('Error!', error.message))
});

