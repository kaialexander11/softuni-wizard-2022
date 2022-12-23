
let state = initState();
let game = initGameObject();


game.startScreen.addEventListener('click', (e) => {

    //console.log('start game'); //=> test line
    game.startScreen.classList.add('hidden');
    game.gameScreen.classList.remove('hidden');

    //Start game
    
    //window.requestAnimationFrame(gameLoop);
    start(state, game);
});

