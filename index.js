'use strict';
const fs = require('fs');
const async = require('async');
const gexf = require('gexf');


const argv = require('yargs')
	.alias('o', 'output')
	.alias('p', 'path')
	.argv

const cardCounter = 0;
const cards = {};

const DeckReader = require('./lib/DeckReader');
const GraphBuilder = require('./lib/GraphBuilder');

const deckReader = DeckReader();

const decks = [];

if (!argv.path) {
	console.log('Must provide path to deck files folder');
	return process.exit(-1);
}

const path = argv.path;
const output = argv.output || 'output.gexf';
fs.readdir(path, (err, files) => {

	async.forEach(files, (file, nextFile) => {
		deckReader.read(`${path}/${file}`, (err, deck) => {
			decks.push(deck);
			return nextFile();
		});
	}, (err) => {
		const builder = GraphBuilder();
		builder.build({ decks, output }, (err, data) => {
			console.log(err,data)
		});	
	});
});