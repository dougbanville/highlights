import Component from "@ember/component";
import { task, timeout } from "ember-concurrency";

export default Component.extend({
  init() {
    this._super(...arguments);
    this.set("results", []);
  },

  searchPosts: task(function*() {
    yield timeout(250);
    let searchUrl = `https://radio.rte.ie/radio1highlights/wp-json/wp/v2/posts?search=${this.query}&type=type=post`;
    let results = yield fetch(searchUrl)
      .then(r => {
        return r.json();
      })
      .then(json => {
        return json;
      });
    this.set("results", results);
  }).restartable()
});
