// array with all sounds
const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

// iterate through each sound in array
sounds.forEach(sound => {
  // create a button
  const btn = document.createElement("button");
  // give it class of btn
  btn.classList.add("btn");
  // text of button is sound from array
  btn.innerText = sound;
  // append btn to #buttons div
  document.getElementById("buttons").appendChild(btn);

  // listen for click. when clicked ...
  btn.addEventListener("click", () => {
    // call stopSounds
    stopSounds();
    // find element with id that matches sound and execute play method on audio element
    document.getElementById(sound).play();
  });
});


function stopSounds() {
    // iterate through sounds 
    sounds.forEach(sound => {
        // find all sound ids
        const audio = document.getElementById(sound);
        // execute pause method on sounds 
        audio.pause();
        // reset time to 0 using currentTime method for <audio>
        audio.currentTime = 0;
    })
}