import Controller from "@ember/controller";
import { inject as service } from "@ember/service";

export default Controller.extend({
  audioPlayer: service(),

  actions: {
    hideSearch(query) {
      this.transitionToRoute("search", { queryParams: { query: query } });
    }
  }
});
