let game = document.createElement('div');
game.className = "game";
game.id = "game"
let container = document.querySelector('.container');
container.appendChild(game);

function Menjalankan (){
    let words = ['makan','minum','tidur','coding','main game handphone','memonont tv']
    const Game = document.getElementById('game');
    let input = document.createElement('input');
    let word = document.createElement('h2');
    let order = 0;
    let totalOrder = words.length;

    // membuat element word
    word.setAttribute('id','word');
    Game.appendChild(word);
    // membuat element input
    input.setAttribute('id','input');
    Game.appendChild(input);

    function menunjukkanWord(theWord){
        word.innerHTML = theWord;
    }
    function clearClass (){
        word.removeAttribute('class');
    }
    function wrong(){
        clearClass();
        word.classList.add('wrong');
    }
    function correct(){
        clearClass();
        word.classList.add('correct');
    }
    input.addEventListener('keyup', (e) => {
        if(e.code == 'Enter'){
            input = document.getElementById('input');
            if(input.value == words[order]){
                input.value = '';
                order++
                clearClass();
                if(totalOrder == order){
                    correct()
                    menunjukkanWord('you Win');
                    input.remove();
                }else{
                    menunjukkanWord(words[order])
                }
            }
        }else{
            wrong()
        }
    })
    menunjukkanWord(words[order]);
}
Menjalankan();