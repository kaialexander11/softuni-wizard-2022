function start(state, game) {
    game.createWizard(state.wizard);
    window.requestAnimationFrame(gameLoop.bind(null, state, game));
}

function gameLoop(state, game){

    const { wizard } = state;
    const { wizardElement } = game;

    //console.log('frame');
    //console.log(state.keys);

    //Move wizard => W A S D => Y and X axises
    

    if(state.keys.KeyW  && wizard.posY > 0){
        wizard.posY = Math.max(wizard.posY - wizard.speed, 0);
    }

    if(state.keys.KeyA){
        wizard.posX = Math.max(wizard.posX - wizard.speed, 0);
    }

    if(state.keys.KeyD){
        //console.log(state.keys);
        wizard.posX = Math.min(wizard.posY + wizard.speed, game.gameScreen.offsetWidth - wizard.width);
    }

    if(state.keys.KeyS){
        wizard.posY = Math.min(wizard.posY + wizard.speed, game.gameScreen.offsetHeight - wizard.height);

    }

    //Render
    wizardElement.style.left = wizard.posX + 'px';
    wizardElement.style.top = wizard.posY + 'px';
    //game.wizardElement.style.left = wizard.posX; => same as the line above

    window.requestAnimationFrame(gameLoop.bind(null, state, game));

};