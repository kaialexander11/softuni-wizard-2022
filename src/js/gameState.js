function initState() {

    let startX = Math.floor(Math.random() * 1000);
    let startY = Math.floor(Math.random() * 500);

    const state = {
        player: 'Neo',
        gameOver: false,
        wizard: {
            width: 82,
            height: 100,
            // startX: 200,
            // startY: 300,
            posX: startX,
            posY: startY,
            speed: 10,
        },

        bugStats: {
            width: 50,
            height: 50,
            nextSpawnTimestamp: 0,
            maxSpawnInterval: 1500,
            speed: 8,
            
        },

        fireball: {
            width: 20,
            height: 20,
            speed: 12,
            nextSpawnTimestamp: 0,
            fireRate: 300,
        },

        keys: {
            KeyA: false,
            KeyS: false,
            KeyD: false,
            KeyW: false,
            Space: false,
        }
    }   

    return state;
}