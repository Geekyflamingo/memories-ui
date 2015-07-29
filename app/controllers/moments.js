import Ember from 'ember';

export default Ember.ObjectController.extend({
    actions: {
    newMoment: function() {
      var controller = this;
      var content = controller.get('contentCopy');
      var caption = controller.get('captionCopy');
      var location = controller.get('locationCopy');
      var happenedAt = controller.get('happenedAtCopy');

      if (content && location) {
        var moment = controller.store.createRecord('moment', { content: content, caption: caption,
            location: location, happenedAt: happenedAt });
        moment.save();
      }
      controller.set('contentCopy', '');
      controller.set('captionCopy', '');
      controller.set('locationCopy', '');
      controller.set('happenedAtCopy', '');
    }
  }
});
