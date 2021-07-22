var token = '1827597556:AAGhYI2HQ3z1wqMwnEKeBfH-3hOfCCTFTQw';

var Bot = require('node-telegram-bot-api'),
    bot = new Bot(token, { polling: true });

console.log('bot server started...');



bot.on('message', (msg) => {
  if (msg.new_chat_members != undefined) {
    bot.sendMessage(msg.chat.id, 'Вітаємо вас на телеграм каналі Вараш.people');
  }
});



