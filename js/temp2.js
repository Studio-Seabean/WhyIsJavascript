// Select the container where you want to append the image
const container = document.querySelector('.container');
// const context = container.getContext('2d');
// const CONTAINER_WIDTH = container.clientWidth;
// const CONTAINER_HEIGHT = container.clientHeight;

// let gameSpeed = 5;

    // Create an image element
    var background = document.createElement('img');
    // Set the source attribute of the image to the path of your image file
    background.src = 'img/back.png';
    // Add any additional attributes or styles to the image element if needed
    background.alt = 'Background'; // Example: set alt attribute for accessibility
    background.style.width = '100%'; // Example: set width attribute for accessibility
    background.style.imageRendering = 'pixelated'; // Example: set imageRendering attribute for accessibility
    // Append the image element to the container
    container.appendChild(background);

    //Middle Layer
    var middleLayer = document.createElement('img');
    middleLayer.classList.add('parallax-layer');
    middleLayer.src = 'img/middle.png';
    middleLayer.alt = 'Logo Image'; 
    middleLayer.style.width = '100%'; // Example: set width attribute for accessibility
    middleLayer.style.imageRendering = 'pixelated'; // Example: set imageRendering attribute for accessibility
    middleLayer.style.position = 'absolute'; // Example: set position to absolute
    middleLayer.style.top = '50%';
    middleLayer.style.left = '50%';
    middleLayer.style.transform = 'translate(-50%, -50%)';
    container.appendChild(middleLayer);

    //Front Layer
    var topLayer = document.createElement('img');
    topLayer.classList.add('parallax-layer');
    topLayer.src = 'img/front.png';
    topLayer.alt = 'Logo Image'; 
    topLayer.style.width = '100%'; // Example: set width attribute for accessibility
    topLayer.style.imageRendering = 'pixelated'; // Example: set imageRendering attribute for accessibility
    topLayer.style.position = 'absolute'; // Example: set position to absolute
    topLayer.style.top = '50%';
    topLayer.style.left = '50%';
    topLayer.style.transform = 'translate(-50%, -50%)';
    container.appendChild(topLayer);

    //Cloud1 Layer
    var cloud1Layer = document.createElement('img');
    cloud1Layer.classList.add('parallax-layer');
    cloud1Layer.src = 'img/cloud1.png';
    cloud1Layer.alt = 'Logo Image'; 
    cloud1Layer.style.width = '100%'; // Example: set width attribute for accessibility
    cloud1Layer.style.imageRendering = 'pixelated'; // Example: set imageRendering attribute for accessibility
    cloud1Layer.style.position = 'absolute'; // Example: set position to absolute
    cloud1Layer.style.top = '50%';
    cloud1Layer.style.left = '50%';
    cloud1Layer.style.transform = 'translate(-50%, -50%)';
    container.appendChild(cloud1Layer);

    //Cloud2 Layer
    var cloud2Layer = document.createElement('img');
    cloud2Layer.classList.add('parallax-layer');
    cloud2Layer.src = 'img/cloud2.png';
    cloud2Layer.alt = 'Logo Image'; 
    cloud2Layer.style.width = '100%'; // Example: set width attribute for accessibility
    cloud2Layer.style.imageRendering = 'pixelated'; // Example: set imageRendering attribute for accessibility
    cloud2Layer.style.position = 'absolute'; // Example: set position to absolute
    cloud2Layer.style.top = '50%';
    cloud2Layer.style.left = '50%';
    cloud2Layer.style.transform = 'translate(-50%, -50%)';
    container.appendChild(cloud2Layer);

    //Cloud3 Layer
    var cloud3Layer = document.createElement('img');
    cloud3Layer.classList.add('parallax-layer');
    cloud3Layer.src = 'img/cloud3.png';
    cloud3Layer.alt = 'Logo Image'; 
    cloud3Layer.style.width = '100%'; // Example: set width attribute for accessibility
    cloud3Layer.style.imageRendering = 'pixelated'; // Example: set imageRendering attribute for accessibility
    cloud3Layer.style.position = 'absolute'; // Example: set position to absolute
    cloud3Layer.style.top = '50%';
    cloud3Layer.style.left = '50%';
    cloud3Layer.style.transform = 'translate(-50%, -50%)';
    container.appendChild(cloud3Layer);

    //image layer, for the logo
    var logoLayer = document.createElement('img');
    logoLayer.classList.add('parallax-layer');
    logoLayer.src = 'img/70percentBIG.png';
    logoLayer.alt = 'Logo Image'; 
    logoLayer.style.width = '50%'; // Example: set width attribute for accessibility
    logoLayer.style.imageRendering = 'pixelated'; // Example: set imageRendering attribute for accessibility
    logoLayer.style.position = 'absolute'; // Example: set position to absolute
    logoLayer.style.top = '50%';
    logoLayer.style.left = '50%';
    logoLayer.style.transform = 'translate(-50%, -50%)';
    container.appendChild(logoLayer);


// Create an array of parallax layers
const parallaxLayers = document.querySelectorAll('.parallax-layer');

// Function to handle parallax effect
function handleParallax() {
    // Calculate the scroll position
    const scrollPosition = window.scrollY;
    
    // Loop through each parallax layer
    parallaxLayers.forEach(function(layer, index) {
        // Adjust the speed of each layer
        const speed = 0.5 * (index + 1); // Adjust the speed of each layer
        
        // Update the position of the layer based on the timer
        const xPos = -((scrollPosition * speed) % window.innerHeight); // Use modulo to create looping effect
        layer.style.transform = 'translateY(' + xPos + 'px)';
    });
}

// Set the interval for the parallax effect
const interval = 100; // Adjust the interval as needed
setInterval(handleParallax, interval);

    
