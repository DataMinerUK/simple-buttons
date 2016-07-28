import { Meteor } from 'meteor/meteor';
import Particle from 'particle-api-js';
import { Mongo } from 'meteor/mongo';

var token;
var particle = new Particle();
const Wims = new Mongo.Collection('wims');

var myAccessToken;
var foo = function(my_token){
  myAccessToken = my_token;
  console.log('external consolog call on global myAccessToken:', myAccessToken);
}

Meteor.startup(() => {
  particle.login({username: '*******@gmail.com', password: '******'}).then(
    function(data){
      token = data.body.access_token
      console.log('API call completed on promise resolve: ', token);
      particle.listDevices({ auth: token }).then(
        function(devices){
          console.log('Devices: ', devices);
          wims = devices.body;
          for (let i = 0; i < wims.length; i++) {
            Wims.insert(wims[i]);
          }
        },
        function(err) {
          console.log('List devices call failed: ', err);
        }
      ).catch(x => console.error(x));
    },
    function(err) {
      console.log('API call completed on promise fail: ', err);
    }
  );
});

Meteor.methods({
  lightParticle: function(deviceId) {
    particle.callFunction({ deviceId: deviceId, name: 'digitalwrite', argument: 'D7:HIGH', auth: token }).then(
      function(data) {
        console.log('Function called succesfully:', data);
      }, function(err) {
        console.log('An error occurred:', err);
      });
  }
});

export default Wims
