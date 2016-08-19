import { Meteor } from 'meteor/meteor';
import Particle from 'particle-api-js';
import { Mongo } from 'meteor/mongo';

var token;
var particle = new Particle();
const Wims = new Mongo.Collection('wims');

Meteor.startup(() => {
    particle.login({username: process.env.PARTICLE_USERNAME, password: process.env.PARTICLE_PASSWORD}).then(
      Meteor.bindEnvironment(function(data){
        token = data.body.access_token
        console.log('API call completed on promise resolve: ', token);
          particle.listDevices({ auth: token }).then(
            Meteor.bindEnvironment(function(devices){
              console.log('Devices: ', devices);
              wims = devices.body;
              for (let i = 0; i < wims.length; i++) {
                Wims.insert(wims[i]);
              }
            }),
            Meteor.bindEnvironment(function(err) {
              console.log('List devices call failed: ', err);
            })
          ).catch(x => console.error(x));
      }),
      Meteor.bindEnvironment(function(err) {
        console.log('API call completed on promise fail: ', err);
      })
    );
});

Meteor.methods({
  startRainbows: function(deviceId){
    particle.signalDevice({ deviceId: deviceId, signal: true, auth: token }).then(
      function(data) {
        console.log('Device is shouting rainbows:', data);
      }, function(err) {
        console.log('Error sending a signal to the device:', err);
      });
  },
  stopRainbows: function(deviceId){
    particle.signalDevice({ deviceId: deviceId, signal: false, auth: token }).then(
      function(data) {
        console.log('Device is shouting rainbows:', data);
      }, function(err) {
        console.log('Error sending a signal to the device:', err);
      });
  }
});

export default Wims
