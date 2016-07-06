import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {"name":"Stars on Github", "color":"blue", "ember":"14.1k", "angular":"40.2k"},
      {"name":"Third-Party Modules", "color":"green", "ember":"1155", "angular":"1488"},
      {"name":"YouTube Results", "color":"red", "ember":"~9.1k", "angular":"~93k"},
      {"name":"GitHub Contributors", "color":"purple", "ember":"501", "angular":"96"},
      {"name":"Chrome Extension Users", "color":"orange", "ember":"66k", "angular":"275k"}
    ];
  }
});
