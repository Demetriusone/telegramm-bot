var token = '1827597556:AAGhYI2HQ3z1wqMwnEKeBfH-3hOfCCTFTQw';

var Bot = require('node-telegram-bot-api'),
    bot = new Bot(token, { polling: true });

console.log('bot server started...');

const osmosis = require('osmosis');
osmosis
    .get('www.rnpp.rv.ua/intpogoda')
    .set({'temp': 'tr:nth-child(6) .value'})   // альтернатива: `.find('title').set('Title')`
    .data(function(data) {
      let results = [];
      results.push(data);
      console.log(results)
      console.log(data.temp)
    })

bot.on('message', (msg) => {
  if (msg.new_chat_members != undefined) {
    bot.sendMessage(msg.chat.id, 'Вітаємо вас на телеграм каналі Вараш.people' );
  }
});




