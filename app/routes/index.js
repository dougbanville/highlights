import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default Route.extend({
  audioPlayer: service(),

  model() {
    return this.store.findAll("audio").then(r => {
      if (this.audioPlayer.status === "idle") {
        this.audioPlayer.initPlayer(r.firstObject);
      }
      //debugger;
      return r;
    });
  }
});
