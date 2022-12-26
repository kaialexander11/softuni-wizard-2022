function initState() {

    let startX = Math.floor(Math.random() * 1000);
    let startY = Math.floor(Math.random() * 500);

    const state = {
        player: 'Neo',
        wizard: {
            width: 82,
            height: 100,
            // startX: 200,
            // startY: 300,
            posX: startX,
            posY: startY,
            speed: 10,
        },
        keys: {}
    }   

    return state;
}