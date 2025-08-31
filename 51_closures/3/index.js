


function createGame(){

    let score = 0;

    function increaseScore(points){
        score += points;
        console.log(`+${points}pts`);
    }

    function decreaseScore(points){
        score -= points;
        console.log(`-${points}pts`);
    }

    function getScore(){
        console.log(`the final score is ${score}pts`);
    }

    return{increaseScore, decreaseScore,getScore}

}

const game = createGame();

game.increaseScore(5)
game.increaseScore(6)
game.decreaseScore(3)
game.getScore()