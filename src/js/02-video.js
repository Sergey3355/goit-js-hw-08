import Vimeo from "@vimeo/player";
import lodash from "lodash.throttle";

const iframe = document.querySelector("iframe");
const player = new Vimeo(iframe);

player.on("play", function () {
  console.log("played the video!");
});

player.getVideoTitle().then(function (title) {
  console.log("title:", title);
});

player.on(
  "timeupdate",
  lodash((data) => {
    localStorage.setItem("videoplayer-current-time", data.seconds);
  }, 1000)
);

let videoplayerCurrentTime = localStorage.getItem("videoplayer-current-time");

player
  .setCurrentTime(videoplayerCurrentTime)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case "RangeError":
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
