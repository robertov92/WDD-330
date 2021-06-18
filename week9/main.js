const squareElement = document.getElementById('square');
let angle = 0;

let r = 255
let g = 0
let b = 0

setInterval(() => {
    angle = (angle + 1) % 360;
    colors();
    squareElement.style.transform = `rotate(${angle}deg)`;
}, 1000 / 60);

function colors() {
    if (r < 255 && g == 0 && b == 0) {
        r++;
    } else if (r == 255 && g < 255 && b == 0) {
        g++;
    } else if (r > 0 && g == 255 && b == 0) {
        r--;
    } else if (r == 0 && g == 255 && b < 255) {
        b++;
    } else if (r == 0 && g > 0 && b == 255) {
        g--;
    } else if (r < 255 && g == 0 && b == 255) {
        r++;
    } else if (r == 255 && g == 0 && b > 0) {
        b--;
    }
    squareElement.style.backgroundColor = rgb(r, g, b)
}

function rgb(r, g, b) {
    return "rgb(" + r + "," + g + "," + b + ")"
}