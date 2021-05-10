 window.addEventListener("keydown", function (e) {
        //Generating audio when key pressed
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //selecting audio of e.keycode
        if (!audio) return; //stop the function from running

        //it generates 1 audio when we pressed same key for 2 times
        //so rewind it to play for times before audio.play()

        audio.currentTime = 0; //rewind to the start

        audio.play(); //after selecting, play the audio

        //styling key div with bit animation
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); //selecting key
        key.classList.add("playing");

        //add() will add animation but will not remove it
        //so set the time to end the effect

        const keys = Array.from(document.querySelectorAll(".key"));
        keys.forEach((key) =>
          key.addEventListener("transitionend", removeTransition)
        ); //Each key will get transition and will remove it after funtion ends
        window.addEventListener("keydown", playSound);

        function removeTransition(e) {
          if (e.propertyName !== "transform") return; //skip it if it's not transform
          e.target.classList.remove("playing");
        }
      });
