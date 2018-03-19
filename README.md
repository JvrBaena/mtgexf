# mtgexf 
[![Build Status](https://img.shields.io/travis/JvrBaena/mtgexf/master.svg?style=flat-square)](https://travis-ci.org/JvrBaena/mtgexf)

Parses Magic the Gathering deck files in a folder and generates a Gexf file depicting the graph with the relations between cards and decks.

# Install
```
npm install -g mtgexf
```

# Usage

Download sample of decklist files and place them in a folder. You can download these files from sites like the official Wizards of the Coast repo: https://magic.wizards.com/en/articles/winning-decks or MtgGoldfish: https://www.mtggoldfish.com/metagame/modern#paper
At this moment, the tool needs the files to be in that particular format (textfile, newline separating sideboard from maindeck).

Then run:

```
mtgexf -p path/to/folder -o path/to/output.gexf
```
Mtgexf will generate a gexf file based on the decks with:

- Nodes for the decks
- Nodes for each card used in the maindecks
- Edges from deck->card used in that deck

The gexf file is ready to be imported in Gephi so you can tune it and render it!
(This example has been generated computing modularity, and applying output/input node degree + Fruchterman-Reingold layout)
![Top 8 Gp Lyon](https://github.com/JvrBaena/mtgexf/blob/master/output/top8Lyon.png?raw=true)
