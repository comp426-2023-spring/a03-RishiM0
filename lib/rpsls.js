
export function rps(ourhand) {
    let hands = ['rock', 'paper', 'scissors'];

    if(ourhand == undefined){
        return {
            'player': hands[Math.floor(Math.random() * hands.length)]
        };
    } else if (!hands.includes(ourhand)) {
        console.error('${ourhand} is out of range.')
        throw new RangeError();
        
    } else if(hands.includes(ourhand.toLowerCase())) {
        let opphand = hands[Math.floor(Math.random() * hands.length)];
        ourhand = ourhand.toLowerCase();
        let result

        if(ourhand == opphand){
            result = 'tie';
        } else if((ourhand == 'rock' && opphand == 'paper') || (ourhand == 'paper' && opphand == 'scissors') || (ourhand == 'scissors' && opphand == 'rock')){
            result = 'lose';
        } else{
            result = 'win';
        }

        return {
            player: ourhand,
            opponent: opphand,
            result: result
        };

    } else{
        
    }
}

export function rpsls(ourhand) {
    let hands = ['rock', 'paper', 'scissors', 'spock', 'lizard'];

    if(ourhand == undefined){
        return {
            'player': hands[Math.floor(Math.random() * hands.length)]
        };
    } else if(hands.includes(ourhand.toLowerCase())) {
        let opphand = hands[Math.floor(Math.random() * hands.length)];
        ourhand = ourhand.toLowerCase();
        let result

        if(ourhand == opphand){
            result = 'tie';
        } else if((ourhand == 'rock' && (opphand == ('paper' || 'spock'))) || (ourhand == 'paper' && (opphand == ('scissors' || 'lizard'))) || (ourhand == 'scissors' && (opphand == ('rock' || 'spock'))) || (ourhand == 'lizard' && (opphand == ('rock' || 'scissors'))) || (ourhand == 'spock' && (opphand == ('paper' || 'lizard')))){
            result = 'lose';
        } else{
            result = 'win';
        }

        return {
            player: ourhand,
            opponent: opphand,
            result: result
        };

    } else{
        console.error('${ourhand} is out of range.')
        throw new RangeError();    }
}
