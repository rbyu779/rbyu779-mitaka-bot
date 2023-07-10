module.exports = (params) => {
  const command = params.toLowerCase();
  let message;

  switch(command){
    case 'sticker':
    case '!sticker':
      message = "kirim gambar dan ubah menjadi sticker\n" +
                "Penggunaan:\n" +
                "*!sticker <author> <name> (opsional)*\n\n" +
                "*keterangan:* \n" +
                "author: nama pembuat sticker\n" +
                "name: nama sticker\n" +
                "(keduanya tidak wajib diisi)\n\n" +
                "*contoh command*:\n" +
                "*!sticker*\n" +
                "*!sticker john_doe nama sticker*\n\n" +
                "*note*\n" +
                "pastikan yang dikirim adalah gambar";
                
      break;
    default:
      message = `command ${command} tidak ditemukan`;
      break;
  }

  return message;
}