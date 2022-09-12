let player, enemy;
let suelo;
let enemies;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    enemies = new Group();
    //Creamos el sprite del player
    player = createSprite(100, height - 40, 40, 40);
    player.shapeColor = color(255);

    //Creamos un enemigo
    enemy = createSprite(width + 100, height - 80, 40, 40);
    enemyCollider = createSprite(enemy.position.x + 20, 0, 20, 1200);
    enemy.setSpeed(10, 180);
    enemyCollider.setSpeed(10, 180);
    enemyCollider.visible = true;

    //enemy.setCollider(enemy.position.x + 20, 800, 30, 800);
    enemy.shapeColor = color(255);
    //Agregamos el enemigo al grupo
    enemies.add(enemy);

    //for (let i = 0; i < enemies.length; i++) {
    //    enemies[i].velocity.x = -10;
    //}

    //Creamos el sprite del suelo
    suelo = createSprite(0, height - 40, width * 2, 40);
    suelo.shapeColor = color(123, 13, 153);
}

function draw() {
    background(0);

    drawSprites();
}

function keyPressed() {
    //La tecla espacio
    if (keyCode === 32) {
        console.log('Saltando');
    }
}
