import Controller from "@ember/controller";

export default Controller.extend({
  *transition() {
    console.log("post", arguments[0]);
  }
});
