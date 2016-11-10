'use strict';

/**
 * Returns a random integer between low (inclusive) and high (exclusive)
 * @param low
 * @param high
 * @returns {int}
 */
function random (low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}

module.exports = random;