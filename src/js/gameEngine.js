function start(state, game) {
    game.createWizard(state.wizard);
    window.requestAnimationFrame(gameLoop.bind(null, state, game));
}

function gameLoop(state, game){

    const { wizard } = state;
    const { wizardElement } = game;

    //console.log('frame');
    //console.log(state.keys);

    //Move wizard
    if(state.keys.KeyD){
        //console.log(state.keys);
        wizard.posX += 10;
    }

    if(state.keys.KeyW){
        wizard.posY -= 10;
    }

    if(state.keys.KeyA){
        wizard.posX -= 10;
    }

    if(state.keys.KeyS){
        wizard.posY += 10;
    }

    //Render
    wizardElement.style.left = wizard.posX + 'px';
    wizardElement.style.top = wizard.posY + 'px';
    //game.wizardElement.style.left = wizard.posX; => same as the line above

    window.requestAnimationFrame(gameLoop.bind(null, state, game));

};