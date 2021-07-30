var token = '1827597556:AAGhYI2HQ3z1wqMwnEKeBfH-3hOfCCTFTQw';

var Bot = require('node-telegram-bot-api'),
    bot = new Bot(token, { polling: true });

console.log('bot server started...');



bot.on('message', (msg) => {
  if (msg.new_chat_members != undefined) {
    bot.sendMessage(msg.chat.id, 'Вітаємо вас на телеграм каналі Вараш.people' );
  }
});

const initBot = function() {

  // /start is called when user inits chat with bot
  bot.on( '/start', function( msg, reply, next ) {

    // Welcome message
    let welcome = str.insert( str.welcome, [ {
      key: 'name',
      value: msg.from.first_name
    } ] );

    // Bot sends welcome message to user and custom keyboard is showed
    let success = bot.sendMessage( msg.from.id, welcome, {
      parseMode: 'html',
      replyMarkup: getMainKeyboard( msg.from.id )
    } );

  } );

  // Simple text is received by the bot
  bot.on( 'text', function( msg, reply, next ) {

    // Current subscription
    let current = subscriptions.get( msg.from.id );

    let isNum = parseInt( msg.text, 10 );

    // If text is a number we analyze the situation
    if ( !isNaN( isNum ) ) {
      analyzeNumber( msg, reply, next, isNum );
    }
    else {

      // Recognized actions based on known texts required
      switch ( msg.text ) {

        case str.subscribe:

          if ( current == null ) {
            subscriptions.add( {
              chatId: msg.from.id
            } );
            subscriptionStep( 2, msg.from.id );
          }
          break;

        case str.state:
          showSubscription( msg, reply, next );
          break;

        case str.unsubscribe:
          cancelSubscription( msg, reply, next );
          break;

        case str.current:
          showCurrentWeather( msg, reply, next );
          break;

      }

    }

  } );



