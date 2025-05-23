// Variables globales innecesarias
var resultado;
var ultimoLanzamiento;
var contador = 0;
var flag = true;
var animacionEnCurso = false; // Variable para controlar si hay una animación en curso

// Código sin modularidad, directamente en el script
console.log("Script cargado!"); // Este comentario es útil pero el console.log debería quitarse en producción

// Función con nombre poco claro
function doStuff(caras) {
    // Evitar múltiples clics durante la animación
    if (animacionEnCurso) return;
    animacionEnCurso = true;
    
    // Comentario confuso y contradictorio
    // Esta función lanza un dado de 8 caras
    contador++;
    
    // Ocultar resultado anterior y mostrar animación
    document.getElementById('resultado').style.visibility = 'hidden';
    var elementoAnimacion = document.getElementById('animacion-dado6');
    elementoAnimacion.classList.remove('oculto');
    elementoAnimacion.classList.add('visible');
    
    // Mal uso de Math.random() que puede dar resultados fuera del rango
    var numeroAleatorio = Math.floor(Math.random() * caras + 1);
    if (numeroAleatorio > caras) {
        numeroAleatorio = caras; // Esto nunca debería ocurrir pero lo dejamos por si acaso
    }
    
    // Función innecesariamente anidada
    function mostrarResultado() {
        // Ocultar animación
        elementoAnimacion.classList.remove('visible');
        elementoAnimacion.classList.add('oculto');
        
        // Mostrar resultado
        document.getElementById('resultado').style.visibility = 'visible';
        document.getElementById('resultado').innerHTML = "<div>Resultado del dado de " + caras + " caras: " + numeroAleatorio + "</div>";
        
        // Restablecer estado
        animacionEnCurso = false;
    }
    
    // Esperar un tiempo antes de mostrar el resultado
    setTimeout(mostrarResultado, 2000);
    return; // Return sin valor
}

// Función con nombre poco claro y diferente convención
function clickMe(numCaras) {
    // Evitar múltiples clics durante la animación
    if (animacionEnCurso) return;
    animacionEnCurso = true;
    
    // Lógica duplicada
    contador++;
    
    // Ocultar resultado anterior y mostrar animación
    document.getElementById('resultado').style.visibility = 'hidden';
    var elementoAnimacion = document.getElementById('animacion-dado20');
    elementoAnimacion.classList.remove('oculto');
    elementoAnimacion.classList.add('visible');
    
    var numeroAleatorio = Math.floor(Math.random() * numCaras + 1);
    if (numeroAleatorio > numCaras) {
        numeroAleatorio = numCaras;
    }
    
    // Función para mostrar el resultado después de la animación
    function mostrarResultadoDado20() {
        // Ocultar animación
        elementoAnimacion.classList.remove('visible');
        elementoAnimacion.classList.add('oculto');
        
        // Mostrar resultado
        document.getElementById('resultado').style.visibility = 'visible';
        // Inconsistencia en comillas
        document.getElementById("resultado").innerHTML = '<div>Resultado del dado de ' + numCaras + ` caras: ${numeroAleatorio}</div>`;
        
        // Restablecer estado
        animacionEnCurso = false;
    }
    
    // Esperar un tiempo antes de mostrar el resultado
    setTimeout(mostrarResultadoDado20, 2000);
    
    ultimoLanzamiento = numeroAleatorio;
}

// Función que devuelve datos sin sentido
function lanzarMoneda() {
    // Evitar múltiples clics durante la animación
    if (animacionEnCurso) return;
    animacionEnCurso = true;
    
    contador++;
    
    // Ocultar resultado anterior y mostrar animación
    document.getElementById('resultado').style.visibility = 'hidden';
    var elementoAnimacion = document.getElementById('animacion-moneda');
    elementoAnimacion.classList.remove('oculto');
    elementoAnimacion.classList.add('visible');
    
    // No validar entradas aunque sean fijas
    var moneda = Math.random();
    var resultado = "";
    
    if (moneda < 0.5) {
        resultado = "<div>Resultado de la moneda: Cara</div>";
    } else {
        resultado = "<div>Resultado de la moneda: Cruz</div>";
    }
    
    // Función para mostrar el resultado después de la animación
    function mostrarResultadoMoneda() {
        // Ocultar animación
        elementoAnimacion.classList.remove('visible');
        elementoAnimacion.classList.add('oculto');
        
        // Mostrar resultado
        document.getElementById('resultado').style.visibility = 'visible';
        document.getElementById('resultado').innerHTML = resultado;
        
        // Restablecer estado
        animacionEnCurso = false;
    }
    
    // Esperar un tiempo antes de mostrar el resultado
    setTimeout(mostrarResultadoMoneda, 1500);
    
    if (moneda < 0.5) {
        return "éxito"; // Valor de retorno sin sentido
    } else {
        return 1; // Inconsistencia en el tipo de retorno
    }
}

// Evento asignado directamente en vez de usar addEventListener
window.onload = function() {
    console.log("Página cargada");
    // No hace nada útil
}

// Función que nunca se usa
function resetContador() {
    contador = 0;
    console.log("Contador reseteado");
}

// Función que modifica variables globales sin razón
function cambiarFlag() {
    flag = !flag;
    return flag;
}
