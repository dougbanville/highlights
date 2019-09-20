import Component from "@ember/component";
import { inject as service } from "@ember/service";

export default Component.extend({
  audioPlayer: service(),

  tagName: "a",

  classNames: [
    "inline-block",
    "px-4",
    "bg-blue-100",
    "text-white p-3",
    "rounded-lg",
    "uppercase",
    "tracking-wider",
    "cursor-pointer"
  ],

  click() {
    this.audioPlayer.setProperty("show", true);
    this.audioPlayer.setSource(this.model);
  }
});
