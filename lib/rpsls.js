
export function rps(ourhand) {
    let hands = ['rock', 'paper', 'scissors'];

    if(ourhand == undefined){
        return {
            'player': hands[Math.floor(Math.random() * hands.length)]
        };
    } else if (!hands.includes(ourhand)) {

        console.error('${ourhand} is out of range.')
        throw new RangeError();

    } else {

        let opphand = hands[Math.floor(Math.random() * hands.length)];
        ourhand = ourhand.toLowerCase();
        let result

        if (player_input == "rock") {
            if (opponent_input == "paper" || opponent_input == "spock") {
                return "lose";
            }
            else if (opponent_input == "lizard" || opponent_input == "scissors") {
                return "win";
            }
        }
        
        if (player_input == "paper") {
            if (opponent_input == "scissors" || opponent_input == "lizard") {
                return "lose";
            }
            else if (opponent_input == "rock" || opponent_input == "spock") {
                return "win";
            }
        }
        
        if (player_input == "scissors") {
            if (opponent_input == "rock" || opponent_input == "spock") {
                return "lose";
            }
            else if (opponent_input == "paper" || opponent_input == "lizard") {
                return "win";
            }
        }
        
        if (player_input == "lizard") {
            if (opponent_input == "rock" || opponent_input == "scissors") {
                return "lose";
            }
            else if (opponent_input == "spock" || opponent_input == "paper") {
                return "win";
            }
        }
        
        if (player_input == "spock") {
            if (opponent_input == "paper" || opponent_input == "lizard") {
                return "lose";
            }
            else if (opponent_input == "rock" || opponent_input == "scissors") {
                return "win";
            }
        }
        
        return "tie";

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
        console.error('This is not a valid options. Please respond with a valid responce, one of the following: rock, paper, scissors, lizard, or spock');
    }
}
