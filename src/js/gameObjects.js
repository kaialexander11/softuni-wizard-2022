function initGameObject(){
    const startScreen = document.querySelector('.start-screen');
    const gameScreen = document.querySelector('.game-screen');
    //const wizard = document.querySelector('.wizard');

    return {
        startScreen,
        gameScreen,
        createWizard(initialState){
            let wizardElement = document.createElement('div');
            wizardElement.classList.add('wizard');

            wizardElement.style.width = initialState.width + 'px';
            wizardElement.style.height = initialState.height + 'px';
            

            wizardElement.style.left = initialState.posX + 'px';
            wizardElement.style.top = initialState.posY + 'px';

            this.wizardElement = wizardElement;
            gameScreen.appendChild(wizardElement);

            return wizardElement;
        },

        createBug(stats){
            const bugElement = document.createElement('divs');
            bugElement.classList.add('bug');

            bugElement.style.width = stats.width + 'px';
            bugElement.style.height = stats.height + 'px';

            bugElement.style.left = gameScreen.offsetWidth - stats.width + 'px';
            bugElement.style.top = Math.floor(Math.random() * gameScreen.offsetHeight - stats.height) + 'px';

            gameScreen.appendChild(bugElement);
        }
    };
}