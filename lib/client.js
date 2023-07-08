const qrcode = require('qrcode-terminal');
const { Client, LocalAuth } = require('whatsapp-web.js');
const messageControll = require('./messageControll.js');

const client = new Client({
  authStrategy: new LocalAuth()
});

client.on('qr', (qr) => {
  qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
  console.log('client is ready');
});

client.on('message', messageControll);

module.exports = client;