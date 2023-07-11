const qrcode = require('qrcode-terminal');
const { Client, LocalAuth } = require('whatsapp-web.js');
const {messageHandler} = require('./eventHandler.js');

const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    args: ['--no-sanbox']
  }
});

client.on('qr', (qr) => {
  qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
  console.log('client is ready');
});

client.on('message', messageHandler);

module.exports = client;