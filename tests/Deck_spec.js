'use strict';

const should = require('should');
const Deck = require('../lib/Deck');

describe('Deck', () => {
  it('Includes uuid when instantiated', (done) => {
    const deck1 = Deck({ name: 'UR Storm', cards: [] });
    const deck2 = Deck({ name: 'UR Storm 2', cards: [] });


    should.exist(deck1.id);
    should.exist(deck2.id);

    deck1.id.should.not.be.eql(deck2.id);

    return done();
  });

  it('Checks card in deck', (done) => {
    const deck1 = Deck(
      {
        name: 'Jund', cards:
        [
          {
				    name: 'Counterspell',
				    num: 4,
				    sideboard: false
          }
        ]
      }
    );

    deck1.hasCard('Tarmogoyf').should.be.eql(false);
    deck1.hasCard('Counterspell').should.be.eql(true);

    return done();
  });
});
