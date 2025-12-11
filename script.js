document.getElementById("year").textContent = new Date().getFullYear();

console.log("Contenido del body cargado");


console.log("Header cargado correctamente");

// Selección de elementos
const perfilBtn = document.getElementById("profile-btn");
const modal = document.getElementById("login-modal");
const cerrar = document.getElementById("cerrar");

// Abrir el formulario al presionar Perfil
perfilBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

// Cerrar al presionar la X
cerrar.addEventListener("click", () => {
    modal.style.display = "none";
});

// Cerrar al hacer clic fuera del cuadro
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});