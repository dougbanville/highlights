import Component from "@ember/component";
import { task, timeout } from "ember-concurrency";
import fade from "ember-animated/transitions/fade";
import { computed } from "@ember/object";
import { inject as service } from "@ember/service";

export default Component.extend({
  transition: fade,
  store: service(),

  init() {
    this._super(...arguments);
    this.set("results", []);
  },

  hasResults: computed("results.[]", function() {
    if (this.results.length > 0 && this.query.length > 0) {
      return true;
    }
  }),

  didReceiveAttrs() {
    this.searchPosts.perform();
  },

  searchPosts: task(function*() {
    yield timeout(250);
    //let searchUrl = `https://radio.rte.ie/radio1highlights/wp-json/wp/v2/posts?search=${this.query}&type=type=post`;
    let results = yield this.store
      .query("audio", {
        search: this.query
      })
      .then(r => {
        return r;
      });
    this.set("results", results);
  }).restartable()
});
