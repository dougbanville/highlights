import Route from "@ember/routing/route";

export default Route.extend({
  model({ slug }) {
    return this.store
      .query("audio", {
        slug: slug
      })
      .then(models => {
        return models.firstObject;
      });
  }
});
