import Component from "@ember/component";
import { task, timeout } from "ember-concurrency";
import fade from "ember-animated/transitions/fade";

export default Component.extend({
  transition: fade,

  init() {
    this._super(...arguments);
    this.set("results", []);
  },

  didUpdateAttrs() {
    this.searchPosts.perform();
  },

  searchPosts: task(function*() {
    yield timeout(250);
    console.log(`run`);
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
