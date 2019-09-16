import DS from "ember-data";
const { attr } = DS;
import PostModel from "ember-wordpress/models/post";
import { computed } from "@ember/object";
import { inject as service } from "@ember/service";

export default PostModel.extend({
  audioPlayer: service(),

  rte_mp3_audio: attr("string"),
  format: attr("string"),
  isInPlayer: computed("audioPlayer.{nowPlaying}", function() {
    return this.id === this.audioPlayer.nowPlaying.id;
  }),
  isPlaying: computed("id", "audioPlayer.{isPlaying,nowPlaying}", function() {
    if (this.id === this.audioPlayer.nowPlaying.id && this.audioPlayer.isPlaying) {
      return this.audioPlayer.isPlaying;
    } else {
      return false;
    }
  })
});
