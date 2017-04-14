module.exports.printMsg = function() {
  console.log("This is a message from the demo package");
}


'use strict';

/**
 * Adds commas to a number
 * @param {number} number
 * @param {string} locale
 * @return {string}
 */
module.exports.numFormater = function(number, locale) {
    return number.toLocaleString(locale);
};