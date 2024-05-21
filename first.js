function toggleOpacity(event) {
    const circle = event.target;
    if (!isFollowing) {
        circle.style.opacity = 0.5;
        selectedCircle = circle; 
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
        if (selectedCircle) {
            selectedCircle.style.opacity = 1;
        }
        isFollowing = false;
        selectedCircle = null; 
    }
}

function getRandomColor() {
    return '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
}