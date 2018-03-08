'use strict';
const { basename } = require('path');

const Reader = require('line-by-line');
const Deck = require('./Deck');

module.exports = () => {
	const that = {};
	const regex = /^(\d+) ([A-Za-z\.,'-_ ]*)$/;

	that.read = (path, cb) => {
		const cards = [];
		let isSideboard = false;
		
		const fileReader = new Reader(path);
		fileReader.on('line', (line) => {
			if (line === '') {
				isSideboard = true;
				return;
			}
			const info = line.match(regex);
			cards.push({
				name: info[2],
				num: info[1],
				sideboard: isSideboard
			});
		});
		
		fileReader.on('end', () => {
      const name = basename(path, '.txt').replace('Deck - ', '');
			return cb(null, Deck({ name, cards }));
		});

		fileReader.on('error', cb);
	};

	return that;
};