import Component from "@ember/component";
import { inject as service } from "@ember/service";

export default Component.extend({
  audioPlayer: service(),

  init() {
    this._super(...arguments);
  },

  didInsertElement() {
    let audio = document.getElementById("audio");

    this.audioPlayer.setAudioPlayer(audio);

    this.audioPlayer.player.onplay = () => {
      this.audioPlayer.setProperty("isPlaying", true);
      this.audioPlayer.setProperty("status", "initialized");
    };
    this.audioPlayer.player.onpause = () => {
      this.audioPlayer.setProperty("isPlaying", false);
    };
  }
});
