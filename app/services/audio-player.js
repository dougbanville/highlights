import Service from "@ember/service";

export default Service.extend({
  init() {
    this._super(...arguments);
    this.nowPlaying = { id: 0 };
  },

  ready: false,

  play: false,

  nowPlaying: null,

  status: "idle",

  isPlaying: false,

  initPlayer(model) {
    this.set("src", model.rte_mp3_audio);
    this.set("src", model.rte_mp3_audio);
    this.set("id", model.id);
    this.set("ready", true);
    this.set("nowPlaying", model);
    this.set("firstRun", true);
    if (this.player) {
      this.player.load();
    }
  },

  setAudioPlayer(audio) {
    this.set("player", audio);
  },
  setSource(model) {
    if (this.player) {
      //this.player.pause();
      if (!model.isInPlayer) {
        this.player.load();
      }
      if (model.isPlaying) {
        this.player.pause();
      } else if (this.status) {
        this.player.play();
      }
    }
    this.set("ready", false);
    this.set("src", model.rte_mp3_audio);
    this.set("id", model.id);
    this.set("ready", true);
    this.set("nowPlaying", model);
  },
  toggle() {
    if (this.isPLaying) {
      this.player.play();
    }
    this.player.pause();
  },
  setProperty(property, value) {
    this.set(property, value);
  }
});
