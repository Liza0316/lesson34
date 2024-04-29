const modal = document.getElementById("modal");
const updateBtn = document.getElementById("update-btn");
const cancelBtn = document.getElementById("cancel-btn");
const circleForm = document.getElementById("circle-form");
let selectedCircle = null;

function openModal(event) {
    event.preventDefault(); 
    selectedCircle = event.target;
    modal.style.display = "block";
}

figure.addEventListener("contextmenu", openModal);

function closeModal() {
    modal.style.display = "none";
    circleForm.reset();
}

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