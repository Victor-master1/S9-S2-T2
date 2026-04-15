function agregarTarea() {
    // 1. Obtener el valor del input y el elemento de la lista
    const input = document.getElementById('tarea');
    const lista = document.getElementById('lista');
    const textoTarea = input.value.trim();

    // 2. Validar que el campo no esté vacío
    if (textoTarea === "") {
        alert("Por favor, escribe una tarea.");
        return;
    }

    // 3. Crear el nuevo elemento de la lista (li)
    const nuevaTarea = document.createElement('li');
    nuevaTarea.textContent = textoTarea;

    // 4. (Opcional) Agregar un evento para eliminar la tarea al hacer clic
    nuevaTarea.onclick = function() {
        this.remove();
    };

    // 5. Agregar la tarea a la lista (ul) y limpiar el input
    lista.appendChild(nuevaTarea);
    input.value = "";
    input.focus(); // Regresa el cursor al input para seguir escribiendo
}