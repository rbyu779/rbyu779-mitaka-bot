const command = require("./command.js");

const messageHandler = (msg) => {
  const client = require("./client.js");
  const prefix = (msg.body[0]=="!") ? msg.body.toLowerCase().split(" ")[0]:null;

  switch (prefix) {
    case "!help":
      command.helpCommand(client, msg);
      break;
    case "!sticker":
      command.stickerCommand(client, msg);
      break;
    default:
      command.unknownPrefix(client, msg, prefix)
      break;
  }
}

module.exports = {
  messageHandler
};