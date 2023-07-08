const helpHandler = (client, msg) => {
  const message = "Command yang tersedia: \n" +
                  "!help - menampilkan halaman help\n" +
                  "!sticker - convert gambar ke sticker\n"

  client.sendMessage(msg.from, message);
  client.sendMessage(msg.from, "source-code:\nhttps://github.com/b1354");
}

const stickerHandler = async(client, msg) => {
  if(msg.hasMedia && msg.type === "image") {
    const media = await msg.downloadMedia();
    if(media) {
      msg.reply(media, null, {
        sendMediaAsSticker: true,
        stickerAuthor: "Mitaka",
        stickerName: "Mitaka-sticker"
      })
      return;
    }
  }
  client.sendMessage(msg.from, "maaf ya\nada masalah waktu ngeproses gambarnya:( (gambarnya ga ada/yang dikirim bukan gambar)");
}

const unknownPrefix = (client, msg, prefix) => {
  if (prefix) {
    client.sendMessage(msg.from, `perintah ${prefix} tidak diketahui`)
  }
}

module.exports = {
  helpHandler,
  stickerHandler,
  unknownPrefix
}