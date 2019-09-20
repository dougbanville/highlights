import Component from "@ember/component";
import { inject as service } from "@ember/service";

export default Component.extend({
  audioPlayer: service(),

  classNames: ["static", "bg-gray-600"],

  init() {
    this._super(...arguments);
  },

  didInsertElement() {
    let audio = document.getElementById("audio");

    this.audioPlayer.setAudioPlayer(audio);

    // has the player intialized
    this.audioPlayer.onready = () => {
      this.audioPlayer.setProperty("show", true);
      this.audioPlayer.setProperty("duration", audio.duration.toFixed(2));
    };

    this.audioPlayer.onload = () => {
      this.audioPlayer.setProperty("duration", audio.duration.toFixed(2));
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
      this.audioPlayer.setProperty("duration", audio.duration.toFixed(2));
    };
  },

  actions: {
    toggle() {
      if (this.audioPlayer.isPlaying) {
        this.audioPlayer.player.pause();
      } else {
        this.audioPlayer.player.play();
      }
    }
  }
});
