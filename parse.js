const osmosis = require('osmosis');
osmosis
    .get('www.rnpp.rv.ua/intpogoda')
    .set({'температура': 'tr:nth-child(6) .value'})   // альтернатива: `.find('title').set('Title')`
    .data(console.log)  // выведет {'Title': 'Google'}