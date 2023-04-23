#!/usr/bin/env node
import minimist from 'minimist';
import {rps} from '../lib/rpsls.js';

var args = minimist(process.argv.slice(2));

function theHelp() {
	console.log('Usage: node-rps [SHOT]\nPlay Rock Paper Scissors (RPS)\n\n',
                '  -h, --help      display this help message and exit\n',
                '  -r, --rules     display the rules and exit\n\nExamples:\n',
                '  node-rps        Return JSON with single player RPS result.\n',
                '                  e.g. {"player":"rock"}\n',
                '  node-rps rock   Return JSON with results for RPS played against a simulated opponent.\n',
                '                  e.g {"player":"rock","opponent":"scissors","result":"win"}');
}

function theR() {
    console.log('Rules for Rock Paper Scissors:\n\n',
    '  - Scissors CUTS Paper\n',
    '  - Paper COVERS Rock\n',
    '  - Rock CRUSHES Scissors');
}


if (args.h || args.help) {
    theHelp();
    process.exit(0);
} else if (args.r || args.rules) {
    theR();
    process.exit(0);
}

let hand = args._[0];
try {
	result = rps(move);
	console.log(JSON.stringify(result));
} catch (e) {
	console.log('Invalid entry!\n\n');
	theHelp();
	theR();
	process.exit(0);
}
