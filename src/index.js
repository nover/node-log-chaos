'use strict';
const bunyan = require('bunyan');
const superagent = require('superagent');
const randomInt = require('./randomInt');

const quoteApi = "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en";
const log = bunyan.createLogger({name: "node-chaos"});
log.info("chaos app booted");

setInterval(() => {
    superagent.get(quoteApi, (err, res) => {
        let rnd = randomInt(0, 100);

        if (err) {
            log.error('Error fetching quote, god damn it');
            return;
        }

        var quote = res.body.quoteText + ' (' + res.body.quoteAuthor + ')';
        if (rnd > 90) {
            console.log('CHAOS, behold: ' + quote);
            return;
        }
        if (rnd >= 0 || rnd < 5) {
            log.fatal(quote);
        }
        else if (rnd > 5 || rnd <= 20) {
            log.error(quote);
        }
        else if (rnd > 20 || rnd <= 70) {
            log.info(quote);
        }
        else if (rnd > 70 || rnd <= 80) {
            log.debug(quote);
        }
        else {
            log.trace(quote);
        }
    });
}, 3000);
