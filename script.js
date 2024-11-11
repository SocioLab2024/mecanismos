function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none"; // Oculta todo el contenido de las pestañas
    }
    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", ""); // Remueve la clase "active"
    }
    document.getElementById(tabName).style.display = "block"; // Muestra el contenido de la pestaña seleccionada
    evt.currentTarget.className += " active"; // Añade la clase "active" al botón seleccionado
}

// Mostrar por defecto la pestaña "pdf" cuando se cargue la página
document.addEventListener('DOMContentLoaded', function() {

    const correctAnswers = {
        q1: "a", // Consulta Popular
        q2: "c", // Iniciativa Legislativa Popular
        q3: "b", //  Expresar opiniones sobre decisiones locales o nacionales
        q4: "c", //  Revocatoria del Mandato
        q5: "b", // La ciudadanía discute temas de interés con las autoridades
        q6: "a", // Iniciativa Legislativa Popular.
        q7: "a", // Revocatoria del Mandato.
        q8: "b", // Consulta Popular
        q9: "a", // Presupuestos Participativos.
        q10: "a", //  Voto.
          
        
        
    };

    document.getElementById("examForm").addEventListener("submit", function(e) {
        e.preventDefault();

        let name = document.getElementById("nombre").value;
        let email = document.getElementById("email").value;
        let totalQuestions = Object.keys(correctAnswers).length;
        let correctCount = 0;
        let incorrectCount = 0;

        let resultMessage = `Nombre: ${name}\nCorreo: ${email}\n\nResultados:\n`;

        // Check each answer
        for (let i = 1; i <= totalQuestions; i++) {
            let questionName = "q" + i;
            let userAnswer = document.querySelector(`input[name="${questionName}"]:checked`);
            
            if (userAnswer) {
                if (userAnswer.value === correctAnswers[questionName]) {
                    correctCount++;
                    resultMessage += `Pregunta ${i}: Correcta\n`;
                } else {
                    incorrectCount++;
                    resultMessage += `Pregunta ${i}: Incorrecta (Tu respuesta: ${userAnswer.value.toUpperCase()})\n`;
                }
            }
        }

        resultMessage += `\nCorrectas: ${correctCount} de ${totalQuestions}`;
        alert(resultMessage);
    });
});

