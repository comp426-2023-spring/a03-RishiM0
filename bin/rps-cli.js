minimist = require(minimist);
import {rps} from '../lib/rpsls.js';

let args = minimist(process.argv.split(2));

function theHelp() {
    console.log('Usage: node-rpsls [SHOT]\nPlay the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!\n\n',
    '  -h, --help        display this help message and exit\n',
    '  -r, --rules       display the rules and exit\n\nExamples:\n',
    '  node-rpsls        Return JSON with single player RPSLS result.\n',
    '                    e.g. {"player":"rock"}\n',
    '  node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.\n',
    '                    e.g {"player":"rock","opponent":"Spock","result":"lose"}'
        );
}

function theR() {
    console.log('Rules for the Lizard-Spock Expansion of Rock Paper Scissors:\n\n',
    ' - Scissors CUTS Paper\n',
    ' - Paper COVERS Rock\n',
    ' - Rock CRUSHES Scissors'
        );
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
    result = rps(hand);
    console.log(JSON.stringify(result))
} catch (err) {
    console.log(err);
    console.log('\ninvalid entry\n');
    theHelp();
    theR();
    process.exit(0);
}
