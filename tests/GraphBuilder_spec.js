'use strict';

const should        = require('should');
const gexf          = require('gexf');
const fs            = require('fs');
const GraphBuilder  = require('../lib/GraphBuilder');
const DeckReader    = require('../lib/DeckReader');

describe('GraphBuilder', () => {

  after((done) => {
    fs.unlink(`${__dirname}/output.gexf`,done);
  });

  it('Should generate a gexf file', (done) => {
    const reader = DeckReader();
    reader.read(`${__dirname}/mocks/Deck - Grixis Energy.txt`, (err, deck) => {
      const builder = GraphBuilder();
      builder.build({ decks: [deck], output: `${__dirname}/output.gexf`}, (err) => {
        const file = fs.readFileSync(`${__dirname}/output.gexf`, 'utf-8');
        const graph = gexf.parse(file);

        graph.nodes.length.should.be.eql(30);
        graph.edges.length.should.be.eql(29);
        return done();
      });
    });
  });
});
