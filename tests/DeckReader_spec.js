'use strict';

const should = require('should');
const DeckReader = require('../lib/DeckReader');

describe('DeckReader', () => {
  const reader = DeckReader();

  it('Should read Decks from files', (done) => {
    reader.read(`${__dirname}/mocks/Deck - Grixis Energy.txt`, (err, deck) => {
      should.not.exist(err);
      deck.name.should.be.eql('Grixis Energy');
      deck.hasCard('The Scarab God').should.be.eql(true);

      return done();
    });
  });

  it('Should not crash for decks with no standard naming', (done) => {
    reader.read(`${__dirname}/mocks/Grixis Energy.txt`, (err, deck) => {
      should.not.exist(err);
      deck.name.should.be.eql('Grixis Energy');
      deck.hasCard('The Scarab God').should.be.eql(true);

      return done();
    });
  });

});
