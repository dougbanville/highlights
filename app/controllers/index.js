import Controller from "@ember/controller";
import fade from "ember-animated/transitions/fade";

export default Controller.extend({
  *transition() {
    console.log("index", arguments[0]);
  }
});
