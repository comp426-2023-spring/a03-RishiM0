minimist = require(minimist);
import {rps} from '../lib/rpsls.js';

var args = minimist(process.argv.split(2));

theHelp(() => {
    console.log('Usage: node-rps [SHOT]\nPlay Rock Paper Scissors (RPS)\n\n',
        '  -h, --help      display this help message and exit\n',
        '  -r, --rules     display the rules and exit\n\nExamples:\n',
        '  node-rps        Return JSON with single player RPS result.\n',
        '                  e.g. {"player":"rock"}\n',
        '  node-rps rock   Return JSON with results for RPS played against a simulated opponent.\n',
        '                  e.g {"player":"rock","opponent":"scissors","result":"win"}'
        );
})

theR(() => {
    console.log('Rules for Rock Paper Scissors:\n\n',
        '  - Scissors CUTS Paper\n',
        '  - Paper COVERS Rock\n',
        '  - Rock CRUSHES Scissors'
        );
})

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
