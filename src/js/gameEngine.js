function start(state, game) {
    game.createWizard(state.wizard);

    window.requestAnimationFrame((timestamp) => gameLoop(state, game, timestamp));
}

function gameLoop(state, game, timestamp){

    const { wizard } = state;
    const { wizardElement } = game;

    

    modifyWizardPosition(state, game);

    if(state.keys.Space){
        game.wizardElement.style.backgroundImage = 'url("/src/images/wizard-fire.png")';
        
        if(timestamp > state.fireball.nextSpawnTimestamp){
            game.createFireBall(wizard, state.fireball);
            state.fireball.nextSpawnTimestamp = timestamp + state.fireball.fireRate;
        }
        
    }else{
        game.wizardElement.style.backgroundImage = 'url("/src/images/wizard.png")';
    };

    


    //Spawn bugs:
    if(timestamp > state.bugStats.nextSpawnTimestamp){
        game.createBug(state.bugStats);
        state.bugStats.nextSpawnTimestamp = timestamp + Math.random() * state.bugStats.maxSpawnInterval;
    }

    //Render bugs:
    let bugElements = document.querySelectorAll('.bug');

    bugElements.forEach(bug => {

        //Detect collision with wizard:
        if(detectCollision(wizardElement, bug)){
            state.gameOver = true;
        }
        
        let posX = parseInt(bug.style.left);

        if(posX > 0){
            bug.style.left = posX - state.bugStats.speed + 'px';
        } else {
            bug.remove();
        }

    });

    //Move/Render fireballs:
    document.querySelectorAll('.fireball').forEach(fireball => {
        let posX = parseInt(fireball.style.left);

        //Detect collision:
        bugElements.forEach(bug => {
            if(detectCollision(bug, fireball)){
                bug.remove();
                fireball.remove();
            }
        });

        if(posX > game.gameScreen.offsetWidth){
            fireball.remove();
        }else{
            fireball.style.left = posX + state.fireball.speed + 'px';
        } 
    });


    

    //console.log(timestamp);

    //console.log('frame');
    //console.log(state.keys);

    //Move wizard => W A S D => Y and X axises
    
    // if(state.keys.KeyW  && wizard.posY > 0){
    //     wizard.posY = Math.max(wizard.posY - wizard.speed, 0);
    // }

    // if(state.keys.KeyA){
    //     wizard.posX = Math.max(wizard.posX - wizard.speed, 0);
    // }

    // if(state.keys.KeyD){
    //     //console.log(state.keys);
    //     wizard.posX = Math.min(wizard.posX + wizard.speed, game.gameScreen.offsetWidth - wizard.width);
    // }

    // if(state.keys.KeyS){
    //     wizard.posY = Math.min(wizard.posY + wizard.speed, game.gameScreen.offsetHeight - wizard.height);

    // }

    //Render wizard:
    wizardElement.style.left = wizard.posX + 'px';
    wizardElement.style.top = wizard.posY + 'px';


    if(state.gameOver){
        alert('Game over');
    }else {
        window.requestAnimationFrame(gameLoop.bind(null, state, game));
    }

    //Render bugs:

    //game.wizardElement.style.left = wizard.posX; => same as the line above

    

};

function modifyWizardPosition(state, game){

    const { wizard } = state;

    if(state.keys.KeyW  && wizard.posY > 0){
        wizard.posY = Math.max(wizard.posY - wizard.speed, 0);
    }

    if(state.keys.KeyA){
        wizard.posX = Math.max(wizard.posX - wizard.speed, 0);
    }

    if(state.keys.KeyD){
        //console.log(state.keys);
        wizard.posX = Math.min(wizard.posX + wizard.speed, game.gameScreen.offsetWidth - wizard.width);
    }

    if(state.keys.KeyS){
        wizard.posY = Math.min(wizard.posY + wizard.speed, game.gameScreen.offsetHeight - wizard.height);

    }
}

function detectCollision(objectA, objectB){
    let first = objectA.getBoundingClientRect();
    let second = objectB.getBoundingClientRect();

    let hasCollision = !(first.top > second.bottom || first.bottom < second.top || first.right < second.left || first.left > second.right);
    return hasCollision;
}