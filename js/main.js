const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = window.innerWidth;
const CANVAS_HEIGHT = canvas.height = window.innerHeight;

const back = document.getElementById('back');
const middle = document.getElementById('middle');
const front = document.getElementById('front');
const cloud1 = document.getElementById('cloud1');
const cloud2 = document.getElementById('cloud2');
const cloud3 = document.getElementById('cloud3');

canvas.style.imageRendering = 'pixelated';

let x = 0;
let x2 = 0;
overlap = 2;
const movSpeed = .1;

//image size is 368x208

class Layer {
    constructor(image, movSpeed, y_Position) {
        this.x = 0;
        this.y = y_Position;
        this.width = 368;
        this.height = 208;
        this.x2 = this.width;
        this.image = image;
        this.speedModifier = movSpeed;
    }

    draw() {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, this.x2, this.y, this.width, this.height);
    }

    update(deltaTime) {
        const speed = this.speedModifier * deltaTime;
        if (this.x > 368) {
            this.x = 0 + overlap;
        } else {
            this.x += speed;
        }

        if (this.x2 > 0) {
            this.x2 = -368 + overlap;
        } else {
            this.x2 += speed;
        }
    }
}


const backLayer = new Layer(back, 1, 0);
const middleLayer = new Layer(middle, 2, 0);
const frontLayer = new Layer(front, 3, 0);
const cloud1Layer = new Layer(cloud1, 4, 0);
const cloud2Layer = new Layer(cloud2, 5, 0);
const cloud3Layer = new Layer(cloud3, 6, 0);

let lastTime = 0;

function animate(currentTime) {
    //ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    const deltaTime = (currentTime - lastTime) / 1000;
    lastTime = currentTime;

    backLayer.update(deltaTime);
    backLayer.draw();
    middleLayer.update(deltaTime);
    middleLayer.draw();
    frontLayer.update(deltaTime);
    frontLayer.draw();
    cloud1Layer.update(deltaTime);
    cloud1Layer.draw();
    cloud2Layer.update(deltaTime);
    cloud2Layer.draw();
    cloud3Layer.update(deltaTime);
    cloud3Layer.draw();

    requestAnimationFrame(animate);
};
animate(0);

