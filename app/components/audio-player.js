import Component from "@ember/component";
import { inject as service } from "@ember/service";
import { fade } from "ember-animated/transitions/fade";
import format from "format-duration";

export default Component.extend({
  audioPlayer: service(),

  transition: fade,

  transitionDuration: 1500,

  classNames: ["static", "bg-gray-600"],

  timeFormat: "0:00",

  init() {
    this._super(...arguments);
  },

  formatDuration(duration) {
    this.audioPlayer.setProperty("duration", duration.toFixed(2));

    let ms = duration.toFixed(0) * 1000;

    if (!isNaN(duration)) {
      this.audioPlayer.setProperty("displayDuration", format(ms));
    }
  },

  didInsertElement() {
    let audio = document.getElementById("audio");

    this.audioPlayer.setAudioPlayer(audio);

    // has the player intialized
    this.audioPlayer.onready = () => {
      this.audioPlayer.setProperty("show", true);
      this.formatDuration(audio.duration);
      //this.audioPlayer.setProperty("duration", audio.duration.toFixed(2));
    };

    this.audioPlayer.onload = () => {
      //this.audioPlayer.setProperty("duration", audio.duration.toFixed(2));
      this.formatDuration(audio.duration);
    };

    this.audioPlayer.player.onplay = () => {
      this.audioPlayer.setProperty("show", true);
      this.audioPlayer.setProperty("isPlaying", true);
      this.audioPlayer.setProperty("status", "initialized");
    };
    this.audioPlayer.player.onpause = () => {
      this.audioPlayer.setProperty("isPlaying", false);
    };
    this.audioPlayer.player.ontimeupdate = () => {
      let percentage = Math.floor((audio.currentTime / audio.duration) * 100);
      this.audioPlayer.setProperty("percentPlayed", percentage);
      this.audioPlayer.setProperty("currentTime", audio.currentTime.toFixed(2));
      //this.audioPlayer.setProperty("duration", audio.duration.toFixed(2));
      this.formatDuration(audio.duration);
    };
    this.audioPlayer.player.onended = () => {
      alert("that's all folks!");
    };
  },

  actions: {
    toggle() {
      if (this.audioPlayer.isPlaying) {
        this.audioPlayer.player.pause();
      } else {
        this.audioPlayer.player.play();
      }
    },
    setTime(time) {
      this.audioPlayer.player.currentTime = time;
    }
  }
});
