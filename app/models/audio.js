import DS from "ember-data";
const { Model, attr, belongsTo, hasMany } = DS;
import { computed } from "@ember/object";
import PostModel from "ember-wordpress/models/post";

export default PostModel.extend({
  rte_mp3_audio: attr("string"),
  post: belongsTo("wordpress/post")
});
