const figure = document.getElementById("figure");
let isFollowing = false;

function addCircle(event) {
    const circle = document.createElement("div");
    circle.classList.add("circle");

    const diameter = Math.floor(Math.random() * 30) + 20;
    const color = getRandomColor();

    circle.style.width = diameter + "px";
    circle.style.height = diameter + "px";
    circle.style.backgroundColor = color;

    circle.style.top = `${event.clientY - diameter / 2}px`;
    circle.style.left = `${event.clientX - diameter / 2}px`;

    circle.addEventListener("click", toggleOpacity);

    figure.appendChild(circle);
    
function toggleOpacity(event) {
    const circle = event.target;
    if (!isFollowing) {
        circle.style.opacity = 0.5;
        window.addEventListener("mousemove", followMouse);
        window.addEventListener("keydown", stopFollowing);
        isFollowing = true;
    }
}

function followMouse(event) {
    if (isFollowing && selectedCircle) {
        const diameter = parseInt(selectedCircle.style.width);
        selectedCircle.style.top = `${event.clientY - diameter / 2}px`;
        selectedCircle.style.left = `${event.clientX - diameter / 2}px`;
    }
}

function stopFollowing(event) {
    if (event.key === "Escape") {
        window.removeEventListener("mousemove", followMouse);
        window.removeEventListener("keydown", stopFollowing);
        isFollowing = false;
    }
}
}
function getRandomColor() {
    return '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
}

