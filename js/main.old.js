// This creates the javascript container variable that will contain all of the images
const container = document.querySelector('.container');

// This is an array to store all of the parallax layers
const parallaxLayers = [];

// This function will CREATE each parallax layer (image element) and assign it to the parallaxLayers array.
// It will give each layer a set of properties that will be used to animate and display the image.
function createParallaxLayer(src, speed) {
    // Create a new image element
    const layer = document.createElement('img');
    layer.classList.add('parallax-layer');
    layer.src = src;
    layer.alt = 'Layer Image';
    layer.style.width = '100%'; // Adjust width as needed
    layer.style.imageRendering = 'pixelated'; // Adjust image rendering as needed
    layer.style.position = 'absolute';
    layer.style.top = '50%';
    layer.style.left = '0';
    
    // Append the layer to the container
    container.appendChild(layer);
    
    // Store the layer and its speed in the parallaxLayers array
    parallaxLayers.push({ element: layer, speed: speed, xPos: 0 });
}

// Create and append each parallax layer
createParallaxLayer('img/back.png', 400);
createParallaxLayer('img/middle.png', 500);
createParallaxLayer('img/front.png', 600);
createParallaxLayer('img/cloud1.png', 500);
createParallaxLayer('img/cloud2.png', 500);
createParallaxLayer('img/cloud3.png', 500);
//createParallaxLayer('img/img/70percentBIG.png', 0.0);

// Function to handle parallax effect
function handleParallax() {
    // Get the current time
    const currentTime = Date.now();

    // Calculate the elapsed time since the animation started
    const elapsedTime = currentTime - startTime;
    
    // Loop through each parallax layer
    parallaxLayers.forEach(function(layerInfo) {
        const layer = layerInfo.element;
        const speed = layerInfo.speed;
        
        // Update the position of the layer based on the timer and speed
        let xPos = (elapsedTime * speed / 1000);

        const bgPosX = xPos % container.offsetWidth;
        
        // container.style.backgroundPositionX = bgPosX = 'px';

        layer.style.transform = 'translateX(' + xPos + 'px) translateY(-50%)';
    });

    requestAnimationFrame(handleParallax);
}

const startTime = Date.now();

requestAnimationFrame(handleParallax);

// // Set the interval for the parallax effect
// const interval = 0.001; // Adjust the interval as needed
// setInterval(handleParallax, interval);
