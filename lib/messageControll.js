const handler = require("./handler.js");

const messageControll = (msg) => {
  const client = require("./client.js");
  const prefix = (msg.body[0]=="!") ? msg.body.toLowerCase().split(" ")[0]:null;

  switch (prefix) {
    case "!help":
      handler.helpHandler(client, msg);
      break;
    case "!sticker":
      handler.stickerHandler(client, msg);
      break;
    default:
      handler.unknownPrefix(client, msg, prefix)
      break;
  }
}

module.exports = messageControll;