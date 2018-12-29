// var mosca = require('mosca');
import * as mosca from 'mosca';

export class MqttServer {

  public startServer() {
    let ascoltatore = {
      //using ascoltatore
      //type: 'mongo',
      //url: 'mongodb://localhost:27017/mqtt',
      //pubsubCollection: 'ascoltatori',
      //mongo: {}
    };

    // var server = new mosca.Server(settings);
    // let server = new mosca.Server({
    //   port: 3000,
    // });
    var server = new mosca.Server({
      http: {
        port: 3000,
        bundle: true,
        static: './'
      }
    });

    server.on('ready', function () {
      console.log('mqtt server started');
    });

    server.on('published', function (packet, client) {
      console.log('Published: ', packet.topic + "---" + packet.payload);
    })

    server.on('subscribed', function (topic, client) {
      console.log('subscribed: ', topic);
    });

    server.on('unSubscribed', function (topic, client) {
      console.log('unSubscribed: ', topic);
    })

    server.on('clientConnected', function (client) {
      console.log('client connected: ', client.id);
    });

    server.on('clientDisConnected', function (client) {

    });

  }

}