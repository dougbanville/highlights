import Component from "@ember/component";

export default Component.extend({
  query: null,

  actions: {
    showSearch() {
      //this.hideSearch();
      this.hideSearch(this.query);
      //this.transitionToRoute("search");
    }
  }
});
