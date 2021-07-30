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


