function agregarTarea() {
    const input = document.getElementById('tarea');
    const lista = document.getElementById('lista');
    const textoTarea = input.value.trim();
    if (textoTarea === "") {
        alert("Por favor, escribe una tarea.");
        return;
    }
    const nuevaTarea = document.createElement('li');
    nuevaTarea.textContent = textoTarea + " "; 
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = "Eliminar";
    botonEliminar.style.marginLeft = "10px"; 
    botonEliminar.onclick = function() {
        nuevaTarea.remove();
    };
    nuevaTarea.appendChild(botonEliminar);
    lista.appendChild(nuevaTarea);
    input.value = "";
    input.focus();
}