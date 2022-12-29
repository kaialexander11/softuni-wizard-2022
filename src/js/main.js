
let state = initState();
let game = initGameObject();

const availableKeys = [
    'KeyA',
    'KeyS',
    'KeyD',
    'KeyW',
    'Space',
];

document.addEventListener('keydown', (e) => {
    if(availableKeys.includes(e.code)){
        state.keys[e.code] = true;
    };
});

document.addEventListener('keyup', (e) => {
    if(availableKeys.includes(e.code)){
        state.keys[e.code] = false;
    };
});


game.startScreen.addEventListener('click', (e) => {

    //console.log('start game'); //=> test line
    game.startScreen.classList.add('hidden');
    game.gameScreen.classList.remove('hidden');

    //Start game

    //window.requestAnimationFrame(gameLoop);
    start(state, game);
});

