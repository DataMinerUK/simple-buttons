import { Meteor } from 'meteor/meteor';
import Particle from 'particle-api-js';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods({
  lightParticle: function(deviceId) {
    var token;
    var particle = new Particle();
    particle.login({username: '*******@gmail.com', password: '******'}).then(
      function(data){
        token = data.body.access_token;
        console.log('API call completed with token: ', token);
        particle.callFunction({ deviceId: deviceId, name: 'digitalwrite', argument: 'D7:LOW', auth: token });
      },
      function(err) {
        console.log('API call fail: ', err);
      }
    );
  }
});
