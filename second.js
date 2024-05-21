const figure = document.getElementById("figure");
let isFollowing = false;
let selectedCircle = null;

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
}

const modal = document.getElementById("modal");
const updateBtn = document.getElementById("update-btn");
const cancelBtn = document.getElementById("cancel-btn");
const circleForm = document.getElementById("circle-form");

function openModal(event) {
    event.preventDefault();
    selectedCircle = event.target;
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
    circleForm.reset();
}

figure.addEventListener("contextmenu", openModal);
figure.addEventListener("dblclick", addCircle);
updateBtn.addEventListener("click", updateCircle);
cancelBtn.addEventListener("click", closeModal);
window.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
});

function updateCircle() {
    const diameter = parseInt(circleForm.elements["diameter"].value);
    const color = circleForm.elements["color"].value;
    if (selectedCircle) {
        selectedCircle.style.width = diameter + "px";
        selectedCircle.style.height = diameter + "px";
        selectedCircle.style.backgroundColor = color;
        closeModal();
    }
}
