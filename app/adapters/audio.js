import WordpressAdapter from "ember-wordpress/adapters/wordpress";

export default WordpressAdapter.extend({
  pathForType() {
    return "posts";
  }
});
