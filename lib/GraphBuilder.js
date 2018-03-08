'use strict';
const fs = require('fs');
const gexf = require('gexf');

module.exports = () => {
  const that = {};

	that.build = ({ decks, output }, cb) => {		
		const graph = gexf.create({
			defaultEdgeType: 'directed',
			model: {
				node: [
					{
						id: "type",
						type: "string",
						title: "type"
					}
				]
			}
		});
		const cards = {};

		let cardNodes = 0;
		let edges = 0;
		
		decks.forEach((deck) => {
			
			graph.addNode({
        id: deck.id,
				label: deck.name,
				attributes:{
					type: 'deck'
				},
				viz: {
          color:'rgb(0, 0, 0)'
        }
			});

			deck.cards.forEach((card) => {
				if (!cards[card.name]) {
					cards[card.name] = cardNodes;
					cardNodes++;
				}

				const cardId = cards[card.name];
				graph.addNode({
					id: cardId,
					label: card.name,
					attributes:{
						type: 'card'
					},
					viz: {
						color:'rgb(0, 0, 0)'
					}
				});

				graph.addEdge({
					id: edges,
					label: card.name,
					source: deck.id,
					target: cardId
				});
				edges++;    

			});

    });
    
		fs.writeFile(output, graph.serialize(), cb);

	};

  return that;
}