'use strict';
const { find } = require('lodash');
const uuidv1 = require('uuid/v1');

module.exports = ({ name, cards }) => {
  const that = { name, cards };
  
  that.id = uuidv1();

  that.hasCard = (cardName) => {
    return !!find(cards, card => card.name === cardName);
  };

  return that;
};