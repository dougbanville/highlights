import Component from "@ember/component";
import { task, timeout } from "ember-concurrency";
import fade from "ember-animated/transitions/fade";

export default Component.extend({
  transition: fade,
  show: false,
  timeoutLength: 150000,
  randomBeerUrl: `http://slowwly.robertomurray.co.uk/delay/1400/url/https://api.punkapi.com/v2/beers/random`,

  showPopup: task(function*() {
    //yield timeout(this.timeoutLength)
    let i = 30;
    while (true) {
      let random = yield fetch(this.randomBeerUrl)
        .then(r => {
          return r.json();
        })
        .then(beer => {
          return beer;
        });
      this.set("show", true);
      this.set("randomBeer", random[0]);
      yield timeout(15000);
    }
    this.set("show", true);
  }).on("didInsertElement"),

  fetchRandomBeer: task(function*() {
    let randomBeer = yield fetch(
      `http://slowwly.robertomurray.co.uk/delay/1400/url/https://api.punkapi.com/v2/beers/random`
    )
      .then(r => {
        return r.json();
      })
      .then(data => {
        return data[0];
      });
    this.set("randomBeer", randomBeer);
  }),

  actions: {
    grabBeer() {
      let task = this.fetchRandomBeer;
      let taskInstance = task.perform();
      this.set("beerTask", taskInstance);
    },
    cancelBeer() {
      this.beerTask.cancel();
    }
  }
});
