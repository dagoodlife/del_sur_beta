import Ember from 'ember';

export default Ember.Component.extend({
	initRevolution: function(){

    $('.tp-banner').revolution({
      delay:9000,
      startwidth:1170,
      startheight:600,
      startWithSlide:0,

      fullScreenAlignForce:"off",
      autoHeight:"off",
      minHeight:"off"

    });

  	}.on('didInsertElement')
});
