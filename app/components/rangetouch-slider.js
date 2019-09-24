import Component from "@ember/component";
import RangeTouch from "rangetouch";

export default Component.extend({
  didInsertElement() {
    const range = new RangeTouch('input[type="range"]', {});
  }
});
