import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default Route.extend({
  audioPlayer: service(),

  model({ slug }) {
    return this.store
      .query("audio", {
        slug: slug
      })
      .then(models => {
        return models.firstObject;
      });
  },

  afterModel(model) {
    if (this.audioPlayer.status === "idle") {
      this.audioPlayer.initPlayer(model);
    }
  }
});
