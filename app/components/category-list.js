import Ember from 'ember';


export default Ember.Component.extend({
  embVal: "14.1k",
  angVal: "40.2k",
  actions: {
    update(category) {
      this.set("angVal", category.angular);
      this.set("embVal", category.ember);
    }
  }
});
