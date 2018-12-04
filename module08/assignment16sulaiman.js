let xPos;
let yPos;
function setup() {
    // create canvas
    createCanvas(800, 500);
    // set background color
    background('red');
}
function draw() {
    
    for (xPos = 40; xPos < width; xPos = xPos + 40) {
        for (yPos = 40; yPos < height; yPos = yPos + 100) {
            fill(xPos/3+50, yPos/2+50, (xPos+yPos)/4);
            ellipse(xPos, yPos, 20);
					if (yPos == 240) {
						fill (255, 255, 0);
						ellipse (xPos, yPos, 10)
					}
        }
    }
}