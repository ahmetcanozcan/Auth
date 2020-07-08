const amqp = require('amqplib/callback_api');
const EventEmitter = require('events').EventEmitter;

const AMQP_URI = process.env.AMQP_URI || 'amqp://localhost'

let conn = null;

function start() {
  return new Promise((resolve, reject) => {

    amqp.connect(AMQP_URI, (err, _conn) => {
      conn = _conn;
      if (err) {
        console.error(err);
        process.exit(1);
      }

      conn.createChannel((err, chan) => {
        if (err) {
          console.error(err);
          process.exit(1);
        }
        console.log('connected to rabbitmq correctly')

        /**
         *  Custom channel consumes
         */



        resolve();
      });
    });
  })
}

function send(qname, obj) {
  let msg = JSON.stringify(obj)
  conn.createChannel((err, cha) => {
    if (err) {
      console.log('can not send', err);
    }
    cha.assertQueue(qname);
    const content = JSON.stringify(obj);
    cha.sendToQueue(qname, Buffer.from(content));
    console.log('Sent message', qname, ':|', obj);
  })
}




module.exports = { start, send }