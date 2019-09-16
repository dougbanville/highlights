import Component from "@ember/component";
import fade from "ember-animated/transitions/fade";

export default Component.extend({
  share: false,

  didInsertElement() {
    //remove wordpress link
    document.getElementsByClassName("more-link")[this.index].style.display = "none";
  },

  transition: function*(context) {
    console.log(context);
  },
  actions: {
    toggleShare() {
      this.toggleProperty("share");
    }
  }
});
