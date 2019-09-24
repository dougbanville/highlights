import Component from "@ember/component";
import format from "format-duration";
import { computed } from "@ember/object";

export default Component.extend({
  didReceiveAttrs() {
    if (Number(this.duration)) {
      let ms = this.duration * 1000;
      this.set("formatted", format(ms));
    }
  }
});
