import DS from 'ember-data';

export default DS.Model.extend({
  happenedAt: DS.attr('date'),
  caption: DS.attr('string'),
  content: DS.attr('string'),
  location: DS.attr('string')
});
