import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default Route.extend({
  audioPlayer: service(),

  model() {
    return this.store.findAll("audio");
  },

  afterModel(model) {
    if (this.audioPlayer.status === "idle") {
      console.log(`init player`);
      this.audioPlayer.initPlayer(model.firstObject);
    }
  }
});
